# Electrician Website Template

A production-ready landing page template for a local electrician business, built with Next.js and Tailwind CSS. Designed to be easily rebranded for any trade or service business.

## What It Is

A single-page marketing site for **Volt Electrics**, a fictional licensed electrician based in Parramatta, NSW. It covers everything a local trade business needs online:

- Hero section with trust signals (licensed, insured, same-day, no call-out fee)
- Services grid (power points, switchboard upgrades, safety inspections, emergency repairs, LED lighting, AC installation)
- Why choose us section
- Customer testimonials with Google review summary
- Compliance/licence badges (AS/NZS 3000)
- About section with founder story
- Contact form with client-side validation that posts to a Next.js API route
- Sticky navigation with mobile menu
- 24/7 emergency banner

## Tech Stack

- **Next.js 16** — App Router, server components by default
- **Tailwind CSS 3** — utility-first styling via PostCSS (no CDN)
- **React 19** — client components only where needed (Navbar, ContactSection)
- **JavaScript only** — no TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customising for a Real Client

| What to change | Where |
|---|---|
| Business name, phone, email, address | All section components under `src/components/` |
| Services offered | `src/components/ServicesSection.jsx` |
| Testimonials | `src/components/TestimonialsSection.jsx` |
| Licence number, ABN | `src/components/Navbar.jsx`, `ComplianceBadges.jsx`, `Footer.jsx` |
| Brand colours | CSS variables in `src/app/globals.css` |
| Email sending on form submit | `src/app/api/contact/route.js` — wire up Resend or similar |

## Project Structure

```
src/
  app/
    layout.js          # Root layout, metadata, fonts
    page.js            # Composes all sections
    globals.css        # CSS variables, Tailwind directives, custom classes
    api/contact/
      route.js         # Contact form POST handler
  components/
    Navbar.jsx
    HeroSection.jsx
    SwitchboardSvg.jsx
    EmergencyBanner.jsx
    ServicesSection.jsx
    WhyUsSection.jsx
    TestimonialsSection.jsx
    ComplianceBadges.jsx
    AboutSection.jsx
    AboutSvg.jsx
    ContactSection.jsx
    Footer.jsx
```
