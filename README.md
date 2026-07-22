# Deemat Financial Solutions — Corporate Website

Production-ready marketing site for **Deemat Financial Solutions (Pvt) Ltd**, built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

> _Strategic Finance. Sustainable Growth._

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build + serve
```

## Tech stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 (App Router, RSC) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + brand design tokens |
| Animation | Framer Motion (respects `prefers-reduced-motion`) |
| Icons | lucide-react |
| Contact backend | Serverless Route Handler (`app/api/contact/route.ts`) |

## Project structure

```
app/
  layout.tsx            Fonts, metadata, skip-link + shared Navbar/Footer
  page.tsx              Home (overview: hero, stats, previews, CTA)
  services/page.tsx     /services  — interactive matrix + process
  industries/page.tsx   /industries — Security & Manufacturing
  about/page.tsx        /about      — value prop, stats, process
  leadership/page.tsx   /leadership — Naboth Matongo profile
  contact/page.tsx      /contact    — validated form
  globals.css           Tailwind layers, brand base styles, a11y focus
  icon.png              Favicon (generated from the logo mark)
  api/contact/route.ts  Validated serverless form endpoint
components/
  Navbar · Hero · StatsBar · About · ServicesSection
  IndustrySolutions · ProcessSteps · LeadershipSection · ContactSection
  ServicesPreview · IndustriesPreview   (home teasers → detail pages)
  PageHeader · CTASection · Footer · Logo · Reveal
public/
  deemat-mark.png · deemat-logo-full.png   (transparent brand assets)
lib/
  content.ts            Single source of truth for copy/data + NAV_LINKS
tailwind.config.ts      Brand palette + shadows + keyframes
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Overview — hero, metrics, value prop, service/industry previews, CTA |
| `/services` | Interactive 4-discipline matrix + 5-step engagement process |
| `/industries` | Security Services & Manufacturing deep-dive |
| `/about` | Fractional-vs-full-time CFO case, metrics, process |
| `/leadership` | Naboth Matongo profile + credentials |
| `/contact` | Validated consultation form + contact details |

Shared `Navbar` and `Footer` live in `app/layout.tsx`, so they render on every
route with active-link highlighting driven by `usePathname()`.

## Brand design tokens

| Token | Hex | Role |
|---|---|---|
| `onyx` | `#1A1A1A` | Primary text, dark containers, buttons |
| `burgundy` | `#8B2635` | Accent, CTAs, growth arrows |
| `burgundy-dark` | `#7A2021` | CTA hover |
| `slate-brand` | `#2B303A` | Sub-text, borders |
| `mist` | `#F8F9FA` | Section background contrast |

Contrast: burgundy on white 7.1:1, white on onyx 17.4:1 — WCAG AA/AAA. Burgundy on
dark is used **decoratively only** (never body text) to stay above threshold.

## Editing content

All copy, services, industries, process steps, stats and leadership details live in
[`lib/content.ts`](lib/content.ts). Update there and every section reflows automatically.

## Wiring up the contact form

`app/api/contact/route.ts` validates server-side and currently logs submissions. To
deliver email, uncomment the Resend example (or drop in SendGrid / Nodemailer) and set
the provider API key as an environment variable. No client changes needed.

## Security note

Pinned to `next@14.2.35`, the latest maintained release of the Next 14 line. Remaining
`npm audit` advisories only affect features this site does not use (`next/image`
remotePatterns, rewrites, Server Actions). Upgrading to Next 15 clears them entirely and
is a low-risk migration for this codebase if desired.
