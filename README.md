# CROC AI Initiative — Web Platform

Production-grade website for **CROC AI Initiative**, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

CROC AI Initiative's single mission: advancing and inspiring AI innovation in Nigeria, and across Africa, through applied research, capacity building, and homegrown AI systems.

## What's included

- **13 pages**: Home, Solutions, Projects, AI Academy (with workshop registration form), Research & Innovation, Government Partnerships, Services, Impact Stories, Company, Careers, Blog & News, Contact, plus legal pages
- Design system (Ink Black `#0A0A0F` / Signal Indigo `#5B54F0` / Periwinkle `#8C86FF`), Space Grotesk + Inter + JetBrains Mono
- Animated knowledge-graph hero (signature visual, respects `prefers-reduced-motion`)
- Fully responsive (mobile nav, fluid type scale, stacking grids)
- SEO: per-page metadata, dynamic `sitemap.xml`, `robots.txt`, Open Graph tags
- Accessible: visible focus states, semantic headings, alt text on decorative elements set to `aria-hidden`

## Not included yet (next phase)

- **Admin CMS** (backend for projects, blog, workshop registrations, leads, etc.) — this repo is the **frontend only**. The registration and contact forms currently accept input and show a confirmation state in the browser; they are **not wired to a database or email service**. See "Wiring up forms" below.
- A backend data layer, authentication, and any server-side storage

## Prerequisites

You need **Node.js 18.18 or newer** installed. This is a JavaScript/TypeScript project, so there's no Python-style virtual environment to set up — Node handles project isolation differently (see below).

Check your version:

```bash
node -v
npm -v
```

If you don't have Node installed, download the LTS version from [nodejs.org](https://nodejs.org).

### Managing Node versions (the closest equivalent to a Python venv)

If you work on multiple JS projects that need different Node versions, use **nvm** (Node Version Manager) instead of installing Node globally. This is the standard way to avoid version conflicts between projects — the rough equivalent of a Python virtual environment:

```bash
# Install nvm (macOS/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Restart your terminal, then:
nvm install 20        # installs Node 20 (LTS)
nvm use 20             # switches this terminal session to Node 20
```

On Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows) instead.

You don't strictly need nvm to run this project — any Node 18.18+ install works fine. It's only useful if you're juggling multiple projects with conflicting Node version requirements.

Note: `npm install` (below) automatically creates a project-local `node_modules/` folder — this already keeps this project's dependencies separate from every other project on your machine, without any extra setup. That's what actually plays the "virtual environment" role here.

## Installing dependencies

```bash
npm install
```

This reads `package.json` and downloads every package the site needs (Next.js, React, Tailwind, etc.) into a local `node_modules/` folder. Takes a minute or two the first time.

## Local development

```bash
npm run dev
```

Visit `http://localhost:4000` — the dev and start scripts are configured to run on port **4000** (see `package.json` → `scripts`). To change the port, edit the `-p 4000` flag in both scripts in `package.json`.

Note: ports `3000` and `5000` are common defaults that are often already in use by other local projects, and port `6000` is reserved by X11 on Linux/macOS (Next.js will refuse to start on it). If `4000` is also taken on your machine, pick any free port above `1024`, e.g. `-p 4001`.

## Wiring up the forms (before real launch)

Two components currently simulate submission client-side:
- `components/register-form.tsx` (workshop registration)
- `components/contact-form.tsx` (contact page)

Each has a `// NOTE:` comment marking where to add a real request, e.g.:

```ts
const res = await fetch("/api/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

You'll need to add a `/app/api/register/route.ts` (and similarly for `/api/contact`) that writes to your database, sends an email (e.g. via Resend or SendGrid), or forwards to your CRM.

## Deploying to Vercel

### Option A — via GitHub (recommended)

1. Push this project to a GitHub repository (the included `.gitignore` already excludes `node_modules`, `.next`, env files, and other build artifacts, so only source files get committed):
   ```bash
   git init
   git add .
   git commit -m "Initial commit — CROC AI Initiative web platform"
   git branch -M main
   git remote add origin https://github.com/<your-org>/croc-ai-platform.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and sign in.
3. Click **Import Project**, select the `croc-ai-platform` repository.
4. Vercel auto-detects Next.js — leave build settings as default:
   - Build command: `next build`
   - Output directory: `.next`
   - Install command: `npm install`
5. Click **Deploy**. Your site will be live at `https://croc-ai-platform.vercel.app` within a couple of minutes.

### Option B — via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # subsequent production deploys
```

### Connecting your custom domain

1. In the Vercel project dashboard, go to **Settings → Domains**.
2. Add `crocai.ng` (or your actual domain).
3. Update your DNS provider with the A/CNAME records Vercel shows you.
4. SSL is issued automatically — no extra configuration needed.

### Environment variables

None are required for the current build. Once you wire up real form submissions, add any API keys (email provider, database URL, etc.) under **Settings → Environment Variables** in Vercel, then reference them via `process.env.YOUR_KEY` in your API routes.

## What's in .gitignore

The included `.gitignore` keeps these out of version control so they never get pushed to GitHub:

- `node_modules/` — installed dependencies (regenerated by `npm install`, never committed)
- `.next/` and `/out/` — Next.js build output
- `.env*` — environment variable files (secrets)
- `.vercel` — Vercel CLI local config
- OS/editor cruft (`.DS_Store`), logs, and TypeScript build info

You shouldn't need to edit this file unless you add a new tool that generates its own cache/output folder.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Home
  solutions/           Solutions page
  projects/            Projects page (AI Research & Innovation Lab, Community AI Literacy Programme)
  ai-academy/          AI Academy + workshop registration
  research/            Research & Innovation
  government/          Government Partnerships
  services/            Services
  case-studies/        Impact Stories
  company/             Company (mission, vision, team)
  careers/             Careers
  blog/                Blog & News
  contact/             Contact
  privacy/, terms/     Legal pages
  sitemap.ts           Dynamic sitemap
  robots.ts            robots.txt
components/
  nav.tsx, footer.tsx, hero-canvas.tsx, section-head.tsx,
  cta-banner.tsx, register-form.tsx, contact-form.tsx
  ui/button.tsx
lib/
  utils.ts             cn() class-merging helper
```
