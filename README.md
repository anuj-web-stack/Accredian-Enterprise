# Accredian Enterprise — Partial Clone

A pixel-faithful, fully responsive recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Live Demo

> **Vercel:** https://accredian-enterprise-app.vercel.app/
> **GitHub:** https://github.com/anuj-web-stack/Accredian-Enterprise.git

---

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Run locally

```bash
# 1. Clone the repo
git 
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open http://localhost:3000
```

## 🏗️ Architecture & Approach

### Tech Stack
| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | Modern React with SSR, file-based routing, API routes |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS | Utility-first, responsive by default, no CSS bloat |
| Fonts | Syne (display) + Inter (body) | Distinctive pairing that matches Accredian's professional tone |
| Animation | CSS keyframes + IntersectionObserver | No extra JS bundle weight |

### Component Architecture

```
app/
  layout.tsx          ← Root layout: fonts, metadata, body wrapper
  page.tsx            ← Page assembly (imports all sections)
  globals.css         ← Tailwind directives + custom animations
  api/
    contact/
      route.ts        ← POST: store lead · GET: list leads

components/
  Navbar.tsx          ← Sticky nav, mobile hamburger, scroll shadow
  Hero.tsx            ← Mesh gradient hero + animated dashboard card
  Stats.tsx           ← Animated count-up with IntersectionObserver
  Solutions.tsx       ← 8-capability card grid with hover effects
  HowItWorks.tsx      ← 4-step interactive process (tab/accordion)
  Programs.tsx        ← Filterable program catalog cards
  Testimonials.tsx    ← Interactive testimonial selector
  Partners.tsx        ← Infinite auto-scrolling logo ticker
  ContactForm.tsx     ← Lead capture with client validation + API call
  Footer.tsx          ← 4-column footer + brand strip
```

### Key Decisions

**Animated dashboard in Hero** — Instead of a static hero image, I built a live-feeling dashboard card with animated progress bars and counter stats. This immediately shows the product's value proposition rather than describing it.

**IntersectionObserver for stat counters** — Numbers animate from 0 to target only when the Stats section enters the viewport, creating delight without wasted animation.

**CSS-only ticker** — The partner logos scroll infinitely using a pure CSS `@keyframes` approach — no library needed, no layout shift.

**Interactive step selector** — The "How It Works" section uses a clickable tab pattern on desktop and a mobile accordion, making it explorable rather than passive.

---

## 🤖 AI Usage (Claude)

This project was developed with significant assistance from **Claude (Anthropic)**.

### Where AI helped

| Area | AI Contribution |
|---|---|
| **Component scaffolding** | Generated the full file structure, TypeScript interfaces, and Tailwind class composition for all 10 components |
| **Animation logic** | Wrote the `useCounter` hook + IntersectionObserver setup for animated stat counters |
| **CSS ticker** | Generated the `@keyframes scrollLeft` approach for infinite logo scrolling |
| **API route** | Scaffolded the Next.js App Router API route with validation, file persistence, and error handling |
| **Hero dashboard** | Designed the mock dashboard card layout with progress bars and user avatars |
| **Form validation** | Wrote client-side regex validation and error state management |

### What I modified / improved manually

- **Color palette** — Adjusted Tailwind brand colors to better match Accredian's actual blue-indigo brand
- **Copy refinement** — Rewrote some testimonial quotes and program descriptions for better authenticity
- **Mobile breakpoints** — Fine-tuned `sm:` and `lg:` breakpoints on the HowItWorks section after visual testing
- **Form UX** — Added the success confirmation state with the submitted email address displayed back
- **API storage** — Swapped Claude's initial `localStorage` suggestion for server-side `/tmp` file storage (Vercel-compatible)
- **Performance** — Added `display: swap` to both Google Fonts and `scroll-smooth` to the root HTML

---

## ✅ Features Built

- [x] Fully responsive landing page (mobile + desktop + tablet)
- [x] Sticky navigation with scroll-aware shadow and mobile hamburger
- [x] Hero section with animated dashboard card + live progress bars
- [x] Animated stat counters (IntersectionObserver)
- [x] 8-card capabilities grid with hover lift effects
- [x] Interactive 4-step "How It Works" (tab on desktop, accordion on mobile)
- [x] Filterable program catalog
- [x] Interactive testimonial selector
- [x] Infinite auto-scrolling partner logo ticker
- [x] Lead capture form with client-side validation
- [x] Next.js API route (`POST /api/contact`) storing leads
- [x] `GET /api/contact` endpoint listing all captured leads
- [x] Footer with 4-column link grid
- [x] Smooth scroll navigation between sections

---

## 🚀 Improvements with More Time

1. **Real database** — Replace `/tmp/leads.json` with Supabase or PlanetScale (Prisma ORM)
2. **Email notification** — Send a confirmation email to the lead + internal Slack notification via Resend API
3. **Admin dashboard** — Password-protected `/admin` page to view captured leads in a table
4. **Framer Motion** — Add page-level transitions and staggered section reveals
5. **Dark mode** — `next-themes` toggle with full dark palette
6. **Program search** — Full-text search across the 500+ program catalog using Fuse.js
7. **Analytics** — Vercel Analytics + custom event tracking on CTA clicks and form submissions
8. **A/B testing** — Test two hero headlines with Vercel's Edge Config
9. **Internationalization** — Hindi language support for India-specific audiences
10. **E2E tests** — Playwright tests for the contact form flow and navigation

---

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   ├── api/contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Solutions.tsx
│   ├── HowItWorks.tsx
│   ├── Programs.tsx
│   ├── Testimonials.tsx
│   ├── Partners.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── public/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 📄 License

This project is a technical assignment submission and is not affiliated with or endorsed by Accredian.
