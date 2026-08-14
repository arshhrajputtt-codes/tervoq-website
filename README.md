# TERVOQ Website

Premium, dark, futuristic marketing site for TERVOQ — built with React + Vite, Tailwind CSS, Framer Motion, and lucide-react.

## What's included

- Cinematic logo-reveal intro animation on load (particles → logo forms in 3D → settles → hero reveals), skips automatically for users with reduced-motion preference set
- Sticky glass navbar
- Hero with an animated "ecosystem" diagram (AI / Software / Automation / Business orbiting TERVOQ)
- 7 expandable service cards, including the new Customer Support Solutions
- Solutions strip, 5-step process timeline, tech stack grid
- Featured product section for TERVOQ Procura
- Why TERVOQ, About, and a working (client-side) contact form with Name / Email / Company / Service Required / Project Description
- Footer with site links and contact email

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Outputs a static `dist/` folder — deploy it to Vercel, Netlify, or any static host.

## Notes

- Colors, type (Manrope / Inter / JetBrains Mono), and section content are defined in `tailwind.config.js` and each component under `src/components/`.
- The contact form currently only shows a client-side success state — wire the `handleSubmit` in `src/components/Contact.jsx` up to your email/CRM endpoint when ready.
- The favicon is a simple SVG placeholder (`public/favicon.svg`) — swap in your full brand icon set when available.
