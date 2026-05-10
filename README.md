# DICKIES Microbakery — Sivota, Greece

A static, bilingual (English / Greek) one-page website for **DICKIES Microbakery**, a newly opened microbakery cafe in Sivota, Greece serving illy coffee, freshly baked bread, sandwiches, smoothies, juices, fruit salads and yoghurt — open daily 07:00 – 19:00.

## Tech stack

- [Astro](https://astro.build) (static output)
- [Tailwind CSS](https://tailwindcss.com) (via `@astrojs/tailwind`)
- TypeScript for the content / translation layer
- Self-hosted **Chantal** (display) and **Pacaembu** (body) fonts
- Deploys to **Cloudflare Pages**

The whole site is one page (`src/pages/index.astro`) composed from a few `.astro` components. There are **no client-side frameworks** — the only JavaScript is a small inline script that toggles the language and the mobile menu.

## Project structure

```
project-root/
├─ public/
│  ├─ images/                     # All photography & brand assets (LOCAL ONLY)
│  └─ fonts/
│     ├─ chantal/                 # .otf — display font
│     └─ Pacaembu-TrialNaipeFoundry/
│        └─ webfonts/             # .woff / .woff2 — body font
├─ src/
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ LanguageSwitcher.astro
│  │  ├─ Bilingual.astro          # Tiny helper that wraps EN/EL text in [data-lang] spans
│  │  ├─ Hero.astro
│  │  ├─ About.astro
│  │  ├─ Menu.astro
│  │  ├─ Contact.astro
│  │  └─ Footer.astro
│  ├─ data/
│  │  ├─ site.ts                  # Business metadata, menu, image-role map
│  │  └─ translations.ts          # All EN + EL UI copy
│  ├─ layouts/
│  │  └─ BaseLayout.astro         # <head>, SEO, JSON-LD, language bootstrap script
│  ├─ pages/
│  │  └─ index.astro              # The one and only page
│  └─ styles/
│     └─ global.css               # Tailwind + @font-face + utility components
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ tsconfig.json
├─ package.json
└─ README.md
```

> All images live locally under `public/images/` and **must not** be replaced with stock photography or external URLs. The brand identity depends on these specific assets.

## Local development

Requires [Node.js](https://nodejs.org) 20 LTS or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev

# 3. Open the URL Astro prints, by default:
#    http://127.0.0.1:4321/
```

### Build for production

```bash
npm run build
```

Outputs the fully static site to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

### Type check

```bash
npx astro check
```

## Bilingual content (EN / EL)

- English is the default. Greek is offered via a switcher in the top navigation (and mirrored in the footer).
- Switching does **not** trigger a page reload — both languages are rendered into the DOM at build time, and a tiny inline script in `BaseLayout.astro` toggles `<html data-lang="…">` to swap visibility via CSS.
- The choice is persisted in `localStorage` under the key `dickies-lang` and restored on next visit. If the browser locale is `el`/`gr`, Greek is shown automatically on first load.

To edit copy, open `src/data/translations.ts`. The dictionary has matching `en` and `el` keys — adding or removing a key in one without the other will produce a TypeScript error.

## Editing content

| What | Where |
| --- | --- |
| EN / EL copy (nav, hero, about, menu labels, contact, footer) | `src/data/translations.ts` |
| Menu categories & items (incl. translations) | `src/data/site.ts` (`menu` array) |
| Phone, email, Instagram, WhatsApp, address, Maps URL | `src/data/site.ts` (`site.contact`, `site.location`, `site.social`) — fields are `null` placeholders by default and are simply hidden in the UI until populated |
| Image role mapping (which file is hero / about / menu banner / etc.) | `src/data/site.ts` (`site.images`) |
| New images | Drop into `public/images/` and reference via `site.images.<role>` |
| Fonts | `public/fonts/` + `@font-face` declarations in `src/styles/global.css` |
| Brand colors | `tailwind.config.mjs` (`theme.colors`) + the canonical reference in `public/images/font.jpg` |

> **Important:** the brief forbids inventing business facts. Phone, email, social handles and the exact street address must remain `null` until the cafe provides them. The UI is designed to show no broken links or empty rows when these are missing.

## Brand constraints (locked)

These are non-negotiable per the project brief:

- **Palette only:** `#004b00` Dark Green, `#006600` Forest Moss, `#00ff00` Fresh Lime, `#efebdd` Eggshell, `#ffffff` Total White. Tailwind is configured with **only** these colors — utility classes for any other color simply don't exist.
- **Fonts only:** `Chantal` (display / headings) and `Pacaembu` (body / UI), both self-hosted.
- **Images only from `public/images/`** — no stock, no external URLs, no AI illustrations.

## Cloudflare Pages deployment

This project is built for Cloudflare Pages.

1. Push the repository to GitHub.
2. In Cloudflare Pages, **Create a project → Connect to Git** and select the repo.
3. Use these build settings:
   - **Framework preset:** Astro (auto-detected)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20` (set via the `.nvmrc` file or as an environment variable `NODE_VERSION=20`)
4. Click **Save and Deploy**. Subsequent commits on the connected branch trigger automatic rebuilds.

No backend, edge functions or environment variables are required.

## Accessibility & SEO notes

- Single `<h1>` per page, ordered headings throughout sections.
- Skip-to-content link, semantic landmarks (`<header>`, `<main>`, `<section id>`, `<footer>`).
- Visible focus rings (Forest Moss) on all interactive elements.
- `prefers-reduced-motion` is respected.
- `<html lang>` reflects the active language at runtime.
- `hreflang` alternates declared for `en`, `el` and `x-default`.
- Open Graph + Twitter Card meta and a `CafeOrCoffeeShop` JSON-LD block in the head.

## License

Trademarks, photographs, illustrations and the DICKIES wordmark are property of DICKIES Microbakery. The Pacaembu typeface ships from Naipe Foundry under a trial license — replace with a licensed copy before production deployment if required by your jurisdiction.
