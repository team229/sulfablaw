# Sulfab Law Office P.C. — Website

A production-minded rebuild of the “Executive Legal Editorial” design: a stately, gallery-white
and crimson-wine website for a San Francisco immigration and federal litigation practice.

Built with **Astro 5** (static HTML, content collections, image optimization) and **React 19**
islands for the interactive pieces. Styling is **Tailwind CSS v4** driven by the design tokens in
`DESIGN.md`. All imagery is stored locally in `src/assets/images` and optimized at build time.

---

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # preview the production build
npm run check     # Astro + TypeScript diagnostics
```

Requires Node 20+.

## Pages

The site now has 22 indexable routes plus a 404 page:

| Section | Route |
| --- | --- |
| Home | `/` |
| Practice areas overview | `/immigration-law-services` |
| Deportation defense | `/immigration-law-service/deportation-defense-lawyer` |
| Asylum | `/immigration-law-service/asylum-lawyer` |
| Immigration detention | `/immigration-law-service/immigration-detention-lawyer` |
| Bond hearings | `/immigration-law-service/immigration-bond-hearings` |
| Habeas corpus | `/immigration-law-service/hebeas-corpus-lawyer` |
| Federal litigation | `/immigration-law-service/federal-immigration-litigation` |
| Immigration appeals | `/immigration-law-service/immigration-appeals-lawyer` |
| Green cards & waivers | `/immigration-law-service/green-card-application-and-waiver` |
| Citizenship & naturalization | `/immigration-law-service/citizenship-and-naturalization` |
| Service areas overview | `/service-areas` |
| Daly City | `/service-areas/immigration-lawyer-daly-city` |
| Alameda | `/service-areas/immigration-lawyer-alameda` |
| South San Francisco | `/service-areas/immigration-lawyer-south-san-francisco` |
| South Berkeley | `/service-areas/immigration-lawyer-south-berkeley` |
| San Bruno | `/service-areas/immigration-lawyer-san-bruno` |
| San Mateo | `/service-areas/immigration-lawyer-san-mateo` |
| Richmond | `/service-areas/immigration-lawyer-richmond` |
| About us | `/about-us` |
| Our team | `/our-team` |
| Contact us | `/contact-us` |
| Client resources & checklists | `/resources` |
| Privacy policy | `/privacy-policy` |
| Terms of service | `/terms-of-service` |
| Disclaimer | `/disclaimer` |
| Not found | `/404` |

## Project structure

```
src/
├── assets/images/          Local photography & logo (optimized by astro:assets)
├── components/
│   ├── *.astro             Static, content-driven sections
│   ├── PageLayout.astro    Interior-page shell: hero, form, TOC, related pages, CTA
│   ├── LegalLayout.astro   Policy/resource shell: hero, TOC, contact aside, CTA
│   ├── SiteHeader.tsx      Sticky header, dropdowns, mobile drawer
│   ├── ConsultationForm.tsx  Validated intake form (hero + full variants)
│   ├── FaqAccordion.tsx    Accessible accordion
│   ├── VideoCard.tsx       Welcome-video card + transcript dialog
│   └── MobileCallBar.tsx   Sticky mobile call / consultation bar
├── content/pages/          One Markdown file per SEO/content page
├── content.config.ts       Content-collection schema and frontmatter types
├── data/site.ts            Firm details, navigation, dockets, FAQs, offices
├── layouts/BaseLayout.astro  SEO, OG image, JSON-LD, fonts, scroll-reveal
├── pages/
│   ├── index.astro         Homepage composition
│   ├── [...slug].astro     Renders every content-collection page
│   ├── resources.astro     Client document checklists
│   ├── privacy-policy.astro / terms-of-service.astro / disclaimer.astro
│   └── 404.astro           Branded not-found page
├── styles/global.css       Tailwind v4 theme, component primitives, article prose
└── utils/                  Small build helpers (table wrapper)
public/
├── favicon.svg
├── og-image.jpg            Social sharing card
└── robots.txt
```

### Editing page content

Each interior page is a Markdown file in `src/content/pages/`. Frontmatter drives the hero and
metadata:

```yaml
---
title: "Asylum Lawyer San Francisco | Sulfab Law Office"
description: "Meta description shown in search results."
h1: "Asylum Lawyer in San Francisco"
navLabel: "Asylum"          # used in breadcrumbs and menus
eyebrow: "Asylum Practice"
lede: "The short introduction shown beside the hero form."
category: practice          # practice | location | firm
order: 2
caseType: "Asylum"          # optional: pre-selects the form's case-type field
image: practice             # practice | location | firm hero image
updated: "2026-11-20"
---
```

The rest of the file is ordinary Markdown (H2/H3/H4, lists, tables, FAQs, strong emphasis). The
layout automatically builds a “On this page” table of contents from the H2s, adds the sticky
consultation card, related pages and the closing CTA.

`src/data/site.ts` holds global content: firm details, navigation dropdowns, rule-of-law badges,
homepage practice summaries, case results, office summaries, process steps, differentiators,
FAQ answers, case types, and the INA statute list.

### Importing / regenerating content

`scripts/import-content.mjs` converts the firm’s original page briefs into cleaned collection
entries. It strips production notes, page-setup metadata and CTA placeholders, and lifts the
title, description, H1 and lede into frontmatter. It is only needed if you are re-importing the
briefs:

```bash
CONTENT_SRC="/path/to/markdown" node scripts/import-content.mjs
```

The generated files are committed, so normal editing can happen directly in
`src/content/pages/`.

### Design tokens

`src/styles/global.css` defines the crimson (`brand-*`) and limestone (`stone-*`) palettes,
the EB Garamond / Manrope / Cinzel type stack, radii, shadows, the component primitives
(`.btn-primary`, `.field-input`, `.chip`, `.shell`) and the `.legal-prose` styles used by the
content pages. Change a token there and the whole site follows.

## Forms

The intake forms (`ConsultationForm.tsx`) validate on the client, pre-select the relevant case
type on practice pages, and show a success state with a reference number. **They do not send data
anywhere yet.** To go live, replace the marked block in `handleSubmit` with a `fetch` to your
intake endpoint (Formspree, a serverless function, or the firm’s CRM webhook) and keep the success
state for the response. Add spam protection (honeypot or Turnstile) before launch.

## Content decisions to review

- **Reviews:** the homepage no longer publishes invented testimonial quotes. It links to the
  firm’s real Yelp, Avvo and BBB profiles, plus Instagram and MapQuest. Add real, written-permission
  quotes to a reviews component when available.
- **News:** the placeholder “Latest Immigration News” cards were replaced with links to the
  substantive practice guides. Add a news collection once real, sourced posts exist.
- **URL casing:** the content brief listed a mixed-case federal litigation URL; the site uses the
  conventional lowercase `/immigration-law-service/federal-immigration-litigation`.
- **Homepage copy:** the homepage now uses the Homepage brief’s copy verbatim, section by section
  (hero, about, practice areas, results, attorney, why-choose, process, locations, FAQs, contact,
  understanding). Only production notes, CTA placeholders and `[confirm]` placeholders were removed
  or filled in, matching how the 21 interior pages were imported.
- **Drafting notes:** all “editor note”, “design note” and “[confirm]” placeholders from the briefs
  were removed. Spanish-language support is stated because the design carries “Hablamos Español”;
  confirm whether other languages or interpreters should be listed.

## Before launch

- [x] Replace the placeholder attorney portrait with the firm's own photo; team portraits added.
- [ ] Wire the consultation forms to a real intake endpoint.
- [x] Add Privacy Policy and Terms pages, linked from the footer, plus a Disclaimer page.
- [ ] Have counsel review the Privacy Policy, Terms of Service and Disclaimer (generic drafts).
- [x] Publish client document checklists at `/resources`.
- [x] Render content-page FAQs as accordions and add a Google Map to the footer.
- [ ] Confirm the office address (the live site lists 369 Pine St, Suite 600 while the brief says
      300 Montgomery Street, Suite 850) and update the map, footer and schema together.
- [ ] Confirm the docket entries with the firm; results disclaimers are in place.
- [ ] Confirm the Yelp/Avvo/BBB/Instagram/MapQuest links and add a Google Business profile URL.
- [ ] Confirm bar admissions, the Of-Counsel team description, and all fee/language wording.
- [ ] Add a real welcome video and update `VideoCard.tsx`.
- [ ] Add Privacy/Terms content and revisit the date-sensitive legal copy.
- [ ] Verify the domain in `astro.config.mjs` (`site`) for canonical URLs and the sitemap.

## Media

See `CREDITS.md` for the source and licence of every image. The attorney portrait is a stock
placeholder and the San Francisco skyline carries a CC BY-SA 3.0 attribution requirement.

## Deployment

The output is fully static. `npm run build` produces `dist/` (including `sitemap-index.xml`,
generated from the `site` value in `astro.config.mjs`). Deploy to Cloudflare Pages, Netlify,
Vercel, or any static host; no server runtime is required.

The site is deployed to Cloudflare Pages as project **`sulfab-law-office`**:

- Production URL: https://sulfab-law-office.pages.dev
- Redeploy: `npm run deploy` (builds, then uploads `dist/` to the `main` branch)
- The upload uses `wrangler pages deploy ... --force` because current Wrangler versions delegate
  Pages to Workers by default; `--force` keeps the classic Pages direct upload.

Update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` if the production
domain differs from `https://www.sulfablaw.com`. Until a custom domain is attached, canonicals on
the `pages.dev` URL still point at `www.sulfablaw.com`.
