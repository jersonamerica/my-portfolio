## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- Node.js + Express
- shadcn-ui
- Tailwind CSS

## Contact form setup

The contact modal submits to a backend endpoint at `/api/contact`.

Set these values in `.env`:

- `RESEND_API_KEY`: your Resend server API key
- `CONTACT_TO_EMAIL`: the inbox that should receive portfolio messages
- `PORT`: optional backend port, defaults to `3000`

For local development, `npm run dev` starts both the Express API and the Vite frontend. In production, run `npm run build` and then `npm start` to serve both the static app and the API from the same server.
