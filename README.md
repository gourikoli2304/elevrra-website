# Elevrra Marketing Agency — Website

A production-ready, responsive marketing site for **Elevrra Marketing Agency**, built with React, Vite, and Tailwind CSS in the "Studio Noir" design direction: near-black background, warm brass-gold accent, bold Archivo display type paired with Manrope body text.

## Overview

Five routed pages — Home, About, Services, Work, Contact — sharing a reusable Navbar/Footer layout, built from the agency's supplied copy with no invented content (no fake clients, stats, or team members).

## Technology Stack

- **React 19** + **Vite** — app shell and dev/build tooling
- **React Router v6** — client-side routing
- **Tailwind CSS v3** — utility-first styling, custom design tokens for the Noir palette
- **Framer Motion** — subtle scroll/entry animations (respects `prefers-reduced-motion`)
- **Lucide React** — icon set (brand icons for Instagram/LinkedIn are hand-drawn SVGs in `src/components/icons.jsx`, since Lucide no longer ships trademarked brand marks)

No backend, CMS, or unnecessary libraries — this is a static, deployable frontend.

## Folder Structure

```
elevrra-website/
├── public/
│   ├── images/        → general site imagery (e.g. og-cover.jpg)
│   ├── portfolio/      → portfolio project photos (see below)
│   └── favicon/        → favicon.svg
├── src/
│   ├── assets/          → local imported assets (icons, images used in JSX)
│   ├── components/       → reusable UI: Navbar, Footer, Button, SectionHeading,
│   │                       ProjectCard, ServiceCard, ProcessStep, FormField, PageHero
│   ├── pages/            → Home.jsx, About.jsx, Services.jsx, Work.jsx, Contact.jsx
│   ├── data/             → services.js, projects.js — edit copy here, not in components
│   ├── layouts/          → MainLayout.jsx (Navbar + Footer wrapper, scroll-to-top)
│   ├── hooks/            → useSEO.js (per-page title/meta description)
│   ├── lib/               → contactApi.js (isolated form submit handler)
│   ├── App.jsx            → route definitions
│   ├── main.jsx           → app entry point
│   └── index.css          → Tailwind base + global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```
Opens the dev server, typically at `http://localhost:5173`.

## Production Build

```bash
npm run build
```
Outputs a static, deployable build to `dist/`.

To preview the production build locally:
```bash
npm run preview
```

## Deployment

The `dist/` folder is a static site — deploy it to any static host:

- **Vercel / Netlify**: connect the repo, set build command `npm run build`, output directory `dist`
- **Any static host** (S3, GitHub Pages, Cloudflare Pages, etc.): upload the contents of `dist/` after building

Because this uses React Router with clean URLs (`/about`, `/services`, etc.), configure your host to redirect all paths to `index.html` (a "SPA fallback" / rewrite rule). Vercel and Netlify do this automatically for Vite projects; other hosts may need a `_redirects` or rewrite rule added.

## Where to Replace Portfolio Images

Portfolio photos are **not included** — the site ships with a clean placeholder (a subtle patterned block with the brand's initials) that displays automatically until real images are added, so nothing ever breaks.

To add real photos:
1. Drop image files into `public/portfolio/` using these exact filenames:
   - `sindhubhumi-dairy-farm.jpg`
   - `basecamp-stay.jpg`
   - `south-mumbai-chess-academy.jpg`
   - `growpro-technologies.jpg`
   - `fratello.jpg`
   - `somashrooms.jpg`
2. That's it — `src/data/projects.js` already points to these paths, so no component code needs to change.

For a social-sharing preview image, add `public/images/og-cover.jpg` (referenced in `index.html`'s Open Graph tags).

## Where to Edit Website Content

All copy lives in two places, separate from the UI:
- `src/data/services.js` — the five services, the four-step process, About page differentiators, and contact form options
- `src/data/projects.js` — portfolio project names, categories, and descriptions

Page-specific headings, hero copy, and section text live directly in each file under `src/pages/`.

## Where to Connect the Contact Form API

The contact form's submit logic is isolated in **`src/lib/contactApi.js`**. It currently simulates a network request (a short delay, then success) and does not send data anywhere. To connect a real backend or form service:

```js
export async function submitContactForm(values) {
  const response = await fetch("https://your-api.com/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!response.ok) throw new Error("Failed to submit form");
  return response.json();
}
```

No changes are needed in `Contact.jsx` — it already calls this function and handles loading, success, and error states.

## Accessibility & SEO

- Semantic HTML, proper heading hierarchy, labeled form fields, visible focus states, "skip to content" link
- Per-page `<title>` and meta description via `useSEO`
- Open Graph / Twitter card meta tags in `index.html`
- Alt text defined per project in `src/data/projects.js`
- Animations respect `prefers-reduced-motion`

## Notes

- Nav CTA links, footer links, and all in-page CTAs route to real internal pages or the real Elevrra Instagram/email — nothing is a placeholder link.
- Instagram links point to `https://instagram.com/elevrra` per the supplied contact details.
