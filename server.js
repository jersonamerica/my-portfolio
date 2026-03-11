import dotenv from "dotenv";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { Resend } from "resend";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "dist");

const PORT = Number(process.env.PORT || 3000);
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "noreply@example.com";
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map();

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
const app = express();

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientIp(request) {
  const forwardedFor = request.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.ip || "unknown";
}

function isRateLimited(ipAddress) {
  const now = Date.now();
  const existing = rateLimitStore.get(ipAddress) || [];
  const recentRequests = existing.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  recentRequests.push(now);
  rateLimitStore.set(ipAddress, recentRequests);

  return recentRequests.length > RATE_LIMIT_MAX_REQUESTS;
}

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/contact", async (request, response) => {
  if (!resend || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    response
      .status(503)
      .json({ message: "Contact service is not configured." });
    return;
  }

  const ipAddress = getClientIp(request);
  if (isRateLimited(ipAddress)) {
    response
      .status(429)
      .json({ message: "Too many requests. Please try again later." });
    return;
  }

  const senderEmail = String(request.body?.senderEmail || "").trim();
  const message = String(request.body?.message || "").trim();

  if (!senderEmail || !message) {
    response
      .status(400)
      .json({ message: "Sender email and message are required." });
    return;
  }

  if (!emailPattern.test(senderEmail)) {
    response.status(400).json({ message: "A valid sender email is required." });
    return;
  }

  if (message.length > 5000) {
    response.status(400).json({ message: "Message is too long." });
    return;
  }

  const safeSenderEmail = escapeHtml(senderEmail);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const result = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: senderEmail,
      subject: `Portfolio inquiry from ${senderEmail}`,
      text: `Sender: ${senderEmail}\n\n${message}`,
      html: `<div><p><strong>Sender:</strong> ${safeSenderEmail}</p><p><strong>Message:</strong></p><p>${safeMessage}</p></div>`,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      response.status(502).json({
        message: "Unable to send message right now.",
        debug: result.error.message,
      });
      return;
    }

    console.log("Email sent successfully:", result.data?.id);
    response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    response.status(502).json({
      message: "Unable to send message right now.",
      debug: error instanceof Error ? error.message : String(error),
    });
  }
});

app.use(express.static(distPath));

app.use((request, response, next) => {
  if (request.path.startsWith("/api/")) {
    next();
    return;
  }

  response.sendFile(path.join(distPath, "index.html"), (error) => {
    if (error) {
      next(error);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
