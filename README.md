# Kartik Suryawanshi | Portfolio

A personal portfolio and resume site showcasing projects, experience, skills, and a contact form. Built with a dark, developer-focused aesthetic and modern tooling.

## Features

- **About** – Introduction and background
- **Skills** – Technical arsenal (Languages, Frontend, Backend, AI/ML, Mobile, Tools) with proficiency indicators
- **Projects** – Highlighted work with links and descriptions
- **Experience** – Timeline of roles and education
- **Contact** – Form that sends emails via [Resend](https://resend.com) to your inbox

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** – Build tool and dev server
- **Tailwind CSS** – Styling
- **shadcn/ui** – UI components (Radix-based)
- **Framer Motion** – Animations
- **Resend** – Contact form email delivery (Node/Express backend)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later) and npm

### Installation

```bash
# Clone the repository
git clone <YOUR_REPO_URL>
cd Portfolio_new

# Install dependencies
npm install
```

### Environment

Create a `.env` file in the project root for the contact form (see `.env.example`):

```env
RESEND_API_KEY=your_resend_api_key
```

Get an API key at [Resend](https://resend.com/api-keys).

### Run Locally

**Development (frontend only):**

```bash
npm run dev
```

Runs the app at [http://localhost:8080](http://localhost:8080). The contact form will not send emails until the API server is running.

**Frontend + contact API (full setup):**

```bash
npm run dev:all
```

This starts both the Vite dev server (port 8080) and the contact API server (port 3001). The contact form will send emails to the address configured in `server/index.js`.

**Run API server only:**

```bash
npm run server
```

### Build for Production

```bash
npm run build
```

Output is in the `dist` folder. Deploy this folder to any static host (Vercel, Netlify, GitHub Pages, etc.). For the contact form to work in production, deploy the `server` as well (e.g. Railway, Render, or a serverless function) and point the frontend to that API URL if needed.

## Project Scripts

| Script       | Description                          |
| ------------ | ------------------------------------ |
| `npm run dev`     | Start Vite dev server                |
| `npm run server`  | Start contact API (Resend)           |
| `npm run dev:all` | Start both dev server and API        |
| `npm run build`   | Production build                     |
| `npm run preview` | Preview production build locally    |
| `npm run lint`    | Run ESLint                           |

## Author

**Kartik Suryawanshi**  
AI & Data Science Engineer · [LinkedIn](https://linkedin.com/in/suryawanshi-kartik) · [GitHub](https://github.com/kartik-suryawanshi)
