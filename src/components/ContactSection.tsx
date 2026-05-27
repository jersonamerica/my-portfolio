import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LoaderCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_API_URL = "/api/contact";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    senderEmail: "",
    message: "",
  });

  const handleChange = (field: "senderEmail" | "message", value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const senderEmail = formData.senderEmail.trim();
    const message = formData.message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!senderEmail || !message) {
      toast.error("Please fill in your email and message.");
      return;
    }

    if (!emailPattern.test(senderEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail,
          message,
        }),
      });

      if (!response.ok) {
        const errorPayload = (await response.json().catch(() => null)) as {
          message?: string;
          name?: string;
        } | null;

        throw new Error(
          errorPayload?.message ??
            errorPayload?.name ??
            "Unable to send message.",
        );
      }

      toast.success("Message sent. I will get back to you soon.");
      setFormData({ senderEmail: "", message: "" });
      setIsDialogOpen(false);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to send message.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary font-display text-sm tracking-wider uppercase mb-2 font-bold">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, my inbox is always open.
          </p>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="rounded-full px-8 py-7 font-display text-lg group bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                <Mail size={20} />
                Say Hello
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>
            </DialogTrigger>

            <DialogContent className="border-secondary/50 bg-card p-0 sm:max-w-xl overflow-hidden">
              <div className="bg-card p-6 border-b border-secondary/50">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-secondary">
                    Say Hello
                  </DialogTitle>
                </DialogHeader>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-6">
                <div className="space-y-2">
                  <Label htmlFor="senderEmail" className="text-secondary">
                    Your email
                  </Label>
                  <Input
                    id="senderEmail"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.senderEmail}
                    onChange={(event) =>
                      handleChange("senderEmail", event.target.value)
                    }
                    disabled={isSubmitting}
                    className="border-secondary/50 focus:border-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-secondary">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, role, or question."
                    className="min-h-36 resize-none border-secondary/50 focus:border-secondary"
                    value={formData.message}
                    onChange={(event) =>
                      handleChange("message", event.target.value)
                    }
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex items-center justify-end gap-3  pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-w-32 rounded-full bg-primary hover:shadow-lg hover:shadow-primary/50"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
            <MapPin size={16} />
            <span className="text-sm">Rizal, Philippines</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t-2 border-secondary/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Jerson America. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/jersonamerica"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jerson-america-544a733a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors font-medium"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-colors font-medium"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
