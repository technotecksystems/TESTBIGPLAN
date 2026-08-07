# BigPlans.ca — Institutional Commercial Documentation Website

A fully responsive, production-ready website for **BigPlans.ca** — built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, inspired by the institutional trust, authority, and aesthetic of **BDC.ca**.

---

## Brand Identity & Color Tokens

- **Ink Navy (`#12191F`)**: Primary headlines, copy, dark backgrounds, mega footer.
- **Electric Blue (`#0A5DE9`)**: Primary CTAs, active nav links, focus states, and full-bleed brand feature bands.
- **Signal Red (`#F1081B`)**: Arrow logo motif, subtle highlight accents.
- **Paper Off-White (`#FDFDFD`)**: Canvas background, card containers.

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# Open http://localhost:3000 in your browser.
```

---

## Cloudflare Pages & Wrangler Deployment

This site is optimized for **Cloudflare Pages** using `@cloudflare/next-on-pages` and edge-runtime API route handlers (`export const runtime = "edge"`).

### Option 1: GitHub Integration (Recommended)

1. Push this repository to GitHub.
2. Go to the [Cloudflare Pages Dashboard](https://dash.cloudflare.com/) and click **Create a project** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run pages:build`
   - **Build Output Directory**: `.vercel/output/static`
   - **Compatibility Flag**: `nodejs_compat`
4. Save and deploy. Every push to `main` will automatically build and deploy.

### Option 2: Manual CLI Deployment via Wrangler

```bash
# 1. Authenticate with Cloudflare (one-time setup)
npx wrangler login

# 2. Build and deploy directly to Cloudflare Pages
npm run deploy
```

---

## Site Architecture & Key Routes

- `/` — Master single-scroll landing page containing Hero, Trust Strip, 3-Pillar Grid, The Problem, Who We Help (9 Industry Tiles), Financing Programs (7 Accordion/Tab Programs), What We Deliver (6 Service Cards), Why BigPlans.ca (Electric Blue Band), 5-Step How It Works, FAQ Accordion, Final CTA, and Mega Footer.
- `/services` — Dedicated commercial documentation services overview.
- `/financing-programs` — Dedicated lender compliance guide (BDC, CSBFL, EDC, FCC, Banks, Private Capital, Grants).
- `/industries` — Industry sector coverage profiles across Canada.
- `/faq` — Comprehensive lender & documentation FAQ.
- `/contact` — Dedicated consultation request page with real edge-runtime form handler.
- `/api/consultation` — Edge-runtime API Route Handler (`export const runtime = "edge"`).

---

## Production Build Verification

To test the `@cloudflare/next-on-pages` build locally before deploying:

```bash
# Build Next.js and compile Cloudflare Pages output
npm run pages:build

# Preview locally with Wrangler
npm run preview
```
