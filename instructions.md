# instructions.md

## General notes and guidance

Build a **static one-page website** for a newly opened microbakery cafe with the name DICKIES in **Sivota, Greece**. The website must be built with **Astro (latest version)** as the web framework and **Tailwind CSS** for all styling. The website must be designed for deployment on **Cloudflare Pages** using a static output build. English must be the default language, and the site must also support Greek via a language switcher placed in the top navigation. [page:2][page:3]

This cafe operates daily from **7:00 AM to 7:00 PM** and its core offering is **illy coffee**, together with microbakery and light brunch-style products such as fruit salads, yoghurt, sandwiches, fresh smoothies, and juices. The website should communicate a fresh, local, modern, calm, and welcoming identity, while still feeling premium and polished. [page:2]

The site must use only the assets that already exist inside the local `images` folder. This includes:
- The logo.
- Regular photography for the cafe.
- Any instruction/reference images that provide design or content guidance.
- Important info exist inside the photos. Take those into consideration as well

Do **not** use any stock photos, generated illustrations, external image URLs, placeholder graphics, or additional icons that are not already available in the project files, unless they are purely CSS-based or simple inline SVG used for UI controls such as a language toggle or mobile menu icon. The LLM must inspect the `images` folder and also review any instruction images found there before implementing the final design.

The color palette and typography are **strict constraints** and must not be changed, extended, substituted, or approximated. Use exactly the following colors:
- Dark Green: `#004b00`
- Forest Moss: `#006600`
- Fresh Lime: `#00ff00`
- Eggshell: `#efebdd`
- Total White: `#ffffff`

Use exactly the following fonts:
- `Chantal`
- `Pacaembu`

The fonts can be found in the "fonts" folder. Find their matching font style by reading the image in images/font.jpg.

The overall experience should feel:
- Minimal
- Modern
- Elegant
- Warm
- Mediterranean
- Clean
- Fresh
- Premium but approachable

The website should prioritize clarity, readability, excellent spacing, and strong visual hierarchy. It should not feel like a generic cafe template. It should reflect the specific identity of a newly opened microbakery cafe in a Greek coastal destination.

Also note clearly in the project that **images are available locally** and are part of the expected implementation source.

---

## Design requirements

Design a **modern, minimal, elegant one-page cafe website** that uses the provided palette and fonts consistently across all sections. The design language must be cohesive and intentional, with careful use of whitespace, soft contrast, clean section transitions, and restrained accent usage.

### Visual style
The design should feel:
- Natural and fresh
- Boutique and curated
- Calm and bright
- Mediterranean/coastal without becoming cliché
- Editorial in typography but practical in layout

### Color usage rules
Use the provided palette only:
- `#efebdd` Eggshell should be the main background or the dominant soft surface color.
- `#ffffff` Total White can be used for cards, overlays, or contrast blocks.
- `#004b00` Dark Green should be used for headings, important text, navigation emphasis, and strong brand anchors.
- `#006600` Forest Moss can be used for buttons, highlights, links, and hover states.
- `#00ff00` Fresh Lime must be used sparingly as a bright accent only, for small interaction highlights, subtle emphasis, or details. Do not overuse it.

Do not introduce any other colors, gradients that create new color families, or tinted shadows outside this palette.

### Typography rules
Use only:
- `Chantal`
- `Pacaembu`

Recommended usage:
- Use one font for display/headings and one for body/UI text.
- Headings should feel refined and distinctive.
- Body text must remain highly readable.
- Maintain strong hierarchy across hero title, section titles, card titles, body text, labels, and navigation.

If there is ambiguity about which font should be used where, prefer:
- Display/headings: `Chantal`
- Body/navigation/UI text: `Pacaembu`

### Layout and composition
The page should be one-page and scroll smoothly through the main sections:
1. Home
2. About Us
3. Menu
4. Contact

Layout principles:
- Mobile-first responsive layout.
- Clean and readable spacing.
- Alternation between text-led and image-led blocks.
- Clear calls to action without overloading the page.
- Sticky or semi-sticky top navigation is allowed if it improves usability.
- Section anchors must work correctly for one-page navigation.

### Mood and tone
The site must visually communicate:
- Morning freshness
- Quality coffee
- Healthy and fresh food
- Local destination charm
- Trust, cleanliness, and hospitality

Avoid:
- Overly dark layouts
- Generic startup/SaaS design patterns
- Heavy animations
- Excessive decoration
- Random icon sets that clash with the photography
- Any design choices that conflict with the provided instruction images

### Images
Use only images from the local `images` folder. The implementation must:
- Reuse the local logo.
- Select the best local images for each section.
- Consider any image-based instructions found in `images`.
- Optimize image display with proper `alt` text.
- Avoid cropping important content out of the photos.
- Preserve a premium editorial look through image sizing and placement.

No external images are allowed.

---

## Site structure and sections

The website is a **single static page** with the following sections:

### 1. Home
Purpose:
- Immediately present the brand and atmosphere.
- Communicate what the cafe is and what it serves.
- Mention the location: Sivota, Greece.
- Mention the operating hours: 7 AM to 7 PM.
- Establish the premium coffee + fresh microbakery identity.

Suggested content:
- Logo in navigation and/or hero.
- Strong headline.
- Short supporting text.
- Primary CTA scrolling to Menu or Contact.
- Secondary CTA if needed, such as “About Us”.
- Hero image from the local `images` folder.

Suggested messaging direction:
- Fresh coffee, microbakery, smoothies, and light all-day options.
- A welcoming daily destination in Sivota.

### 2. About Us
Purpose:
- Tell the story of the newly opened cafe.
- Introduce the concept: a local microbakery cafe focused on quality coffee and fresh light food.
- Emphasize freshness, simplicity, local hospitality, and all-day accessibility.

Suggested content:
- Short brand story.
- A paragraph about the daily offering.
- A paragraph about the experience or philosophy.
- Supporting image(s) from local assets.

This section should feel warm and personal, but concise.

### 3. Menu
Purpose:
- Present the main categories in a clean and readable way.
- The menu does not need to be overly large or restaurant-like; it should feel curated.

Expected categories:
- Coffee (explicitly mention illy brand)
- Fruit salads
- Yoghurt
- Sandwiches
- Fresh smoothies
- Fresh juices

Implementation guidance:
- Create a well-organized menu layout using cards, grouped lists, or a structured grid.
- Make sure the bilingual structure is easy to maintain.
- If no prices are available, use category + item listings only.
- If prices are available from assets or instructions, include them cleanly.

This section must be highly legible on mobile.

### 4. Contact
Purpose:
- Make it easy for users to find and contact the cafe.
- Add social media icons so people can click such as instagram and whatsapp

Expected content:
- Location: Sivota, Greece
- Opening hours: 7:00 AM – 7:00 PM
- Contact details if provided in project assets or content
- Optional map link if explicitly provided, but avoid embedding external heavy widgets unless requested
- A simple and elegant closing CTA

If phone, email, Instagram, or map URL are not explicitly available in the project content, leave clearly marked placeholders in a maintainable content object and do not invent details.

---

## Language requirements

The website must support **English and Greek**, with:
- English as the default language
- Greek as the secondary language
- A language switcher visible in the top navigation

Implementation requirements:
- The language switcher should be simple, elegant, and obvious.
- It must work on both desktop and mobile.
- It should not require a full page reload if avoidable.
- Since this is a one-page static site, translations should be handled through a lightweight local content structure.

Recommended implementation approach:
- Store all text content in a local translation object or data file with `en` and `el` keys.
- Render text dynamically based on a selected language state.
- Default to `en`.
- Keep all copy centralized for easy editing.

Do not use external i18n services or unnecessary complexity.

---

## Technical requirements

### Core stack
Use:
- **Astro (latest version)**
- **Tailwind CSS**
- Static site architecture
- Deployable to **Cloudflare Pages**

Cloudflare Pages supports Astro projects with:
- Build command: `npm run build`
- Output directory: `dist` [page:2]

### Astro requirements
- Use Astro components for section composition and layout.
- Keep the project simple and static.
- Avoid unnecessary client-side JavaScript.
- Only use client-side interactivity where needed for:
  - Language switching
  - Mobile navigation toggle
  - Smooth small UI enhancements if needed

Do not introduce React, Vue, or other frameworks unless absolutely necessary. This project should remain lightweight.

### Tailwind requirements
- Use Tailwind CSS for all styling.
- Configure the theme so the provided brand colors are available as named tokens.
- Extend Tailwind with the project fonts if local font files are included.
- Keep utility usage clean and systematic.
- Prefer reusable component patterns and consistent spacing scales.

### Performance requirements
- Optimize for a fast static page.
- Use responsive images.
- Avoid large unnecessary JS bundles.
- Avoid autoplay video, heavy sliders, and large third-party libraries.
- Maintain excellent mobile performance.

### Accessibility requirements
- Semantic HTML structure.
- Proper heading order.
- Keyboard-accessible navigation.
- Clear button and link states.
- Alt text for all meaningful images.
- Good contrast using the provided palette.
- Visible focus states.

### Responsive behavior
The site must be fully responsive for:
- Mobile
- Tablet
- Desktop

Minimum expectations:
- Mobile-first layout
- Usable navigation on small screens
- Comfortable text line lengths
- Clear spacing between sections
- Menu section must remain readable on narrow screens

### Image handling
- All images must come from the local `images` folder.
- Use Astro image handling if appropriate for local assets.
- Do not use external images.
- Respect provided instruction images found in the folder.

### Content handling
- Keep content maintainable.
- Centralize text in a content file or translation data object.
- Do not hardcode repeated strings in multiple places when a shared source is better.

### Restrictions
- Do not change the brand palette.
- Do not change the fonts.
- Do not pull any external images.
- Do not invent business facts not explicitly provided.
- Do not create extra pages.
- Do not turn the site into a blog, shop, or complex app.
- Do not add a backend.
- Do not add a CMS unless explicitly asked later.

---

## File structure expected

Use a clean Astro project structure similar to the following:

```text
project-root/
├─ public/
│  ├─ images/
│  │  ├─ logo.*
│  │  ├─ cafe-photos...
│  │  ├─ instruction-images...
│  │  └─ ...
│  └─ fonts/
│     ├─ Chantal.*
│     └─ Pacaembu.*
├─ src/
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ LanguageSwitcher.astro
│  │  ├─ Hero.astro
│  │  ├─ About.astro
│  │  ├─ Menu.astro
│  │  ├─ Contact.astro
│  │  └─ Footer.astro
│  ├─ data/
│  │  ├─ translations.ts
│  │  └─ site.ts
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  └─ index.astro
│  └─ styles/
│     └─ global.css
├─ astro.config.mjs
├─ package.json
├─ tailwind.config.mjs
├─ tsconfig.json
├─ README.md
└─ instructions.md
```

### File structure notes
- Put all provided images in `public/images/`.
- Put local font files in `public/fonts/` if available.
- Keep all translation strings in `src/data/translations.ts`.
- Keep reusable business metadata in `src/data/site.ts`.
- Keep the page entry in `src/pages/index.astro`.
- Use `BaseLayout.astro` for shared metadata, fonts, and global structure.

If the LLM finds that the `images` folder already exists elsewhere, it may preserve that location if Astro can serve it correctly, but the final structure should remain clean and maintainable.

---

## Content architecture guidance

Use a content model like this:

- `site.ts`
  - cafe name
  - location
  - opening hours
  - menu categories
  - image references
  - contact placeholders if needed

- `translations.ts`
  - `en`
    - nav labels
    - hero text
    - about text
    - menu labels
    - contact labels
  - `el`
    - Greek equivalents

This keeps all bilingual text in one place and makes updates easy.

---

## Component behavior guidance

### Header
- Include logo from local assets.
- Include nav links to Home, About, Menu, Contact.
- Include language switcher.
- Include mobile menu toggle if needed.
- Sticky header is acceptable.

### Hero
- Strong visual introduction.
- Use local image(s).
- Include main headline, subheadline, and CTA(s).
- Mention Sivota and opening hours.

### About
- Clean two-column or stacked layout depending on viewport.
- Local image support.
- Concise story-driven copy.

### Menu
- Present grouped categories.
- Make it easy to scan.
- Avoid clutter.
- Strong typography and spacing.

### Contact
- Include all available contact/location details.
- Maintain a clean closing layout.
- Optionally include a final brand statement or invitation to visit.

### Footer
- Minimal footer.
- Repeat essential navigation or branding only if useful.
- Keep it small and elegant.

---

## Technical implementation notes

### Astro configuration
Prefer a static Astro build suitable for Cloudflare Pages. For this project, a static deployment is sufficient and is aligned with Cloudflare Pages’ normal Astro setup using `npm run build` and `dist` output. [page:2]

### Tailwind theme extension
Configure Tailwind theme extensions for:
- Brand colors
- Font families
- Spacing consistency
- Optional container widths
- Optional shadows only if they stay within the visual identity

### Fonts
If font files exist locally, define `@font-face` in `src/styles/global.css` and use them through Tailwind theme extension. If local files are missing, leave a clear TODO note in code and README rather than replacing them with fallback design substitutes.

### Navigation behavior
Anchor links should scroll to:
- `#home`
- `#about`
- `#menu`
- `#contact`

Use smooth scrolling.

### SEO basics
Include:
- Proper page title
- Meta description
- Open Graph basics if possible
- Meaningful `lang` attribute, defaulting to `en`
- Canonical placeholder if domain is not yet known

### Bilingual details
The language switcher labels can be:
- `EN`
- `GR`

Default must be `EN`.

When switching language:
- All navigational labels should update.
- All section text should update.
- CTA labels should update.
- Any repeated site labels should update consistently.

---

## Content constraints

Do not fabricate:
- Exact street address
- Phone number
- Email address
- Social handles
- Prices
- Extra services
- Booking functionality

If these are not present in project inputs, keep them as clearly marked editable placeholders in the data layer, not directly in UI copy.

---

## Deployment notes

This project is intended for **Cloudflare Pages**. Cloudflare Pages supports Astro builds with:
- Build command: `npm run build`
- Build output directory: `dist` [page:2]

Recommended deployment flow:
1. Create the Astro project.
2. Install Tailwind CSS.
3. Build the one-page site.
4. Push the project to GitHub.
5. Connect the repository to Cloudflare Pages.
6. In Cloudflare Pages, configure:
   - Framework preset: Astro if auto-detected
   - Build command: `npm run build`
   - Output directory: `dist`
7. Deploy.

Cloudflare Pages will rebuild automatically on new commits when connected to a Git repository. [page:2]

---

## README file requirements

Also generate a `README.md` that explains clearly how to run the project locally and deploy it.

The README must include:

### Project summary
- Short description of the cafe site
- Tech stack: Astro + Tailwind + Cloudflare Pages
- Static one-page bilingual site

### Local development setup
Example setup instructions:
1. Install Node.js LTS.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown by Astro.

### Build for production
```bash
npm run build
```

### Preview production build locally
```bash
npm run preview
```

### Cloudflare Pages deployment
Document:
- Push to GitHub
- Import repository into Cloudflare Pages
- Use:
  - Build command: `npm run build`
  - Output directory: `dist`

### Assets and fonts note
Mention that:
- Images are stored locally and must come from the provided `images` folder.
- Fonts must be available locally if custom brand typography is required exactly as specified.

### Editing content
Explain where to edit:
- English and Greek text
- Menu items
- Business details
- Images
- Fonts
- Colors

---

## Acceptance checklist

The final implementation must satisfy all of the following:

- Built with Astro latest version
- Styled only with Tailwind CSS
- Static one-page site
- Deployable on Cloudflare Pages
- English default, Greek supported
- Language switcher in top navigation
- Sections: Home, About Us, Menu, Contact
- Uses only local images from `images`
- Uses local logo
- Considers instruction images from `images`
- Uses only the specified brand colors
- Uses only the specified fonts
- Mobile responsive
- Clean, modern, minimal design
- No external stock images
- No invented business details
- README included with local setup and deployment instructions

---

## Final implementation priority

Priority order:
1. Respect the exact brand constraints: colors, fonts, local images, bilingual requirement.
2. Build a polished one-page user experience.
3. Keep the code maintainable and lightweight.
4. Make Cloudflare Pages deployment straightforward.
5. Ensure the site looks premium on mobile and desktop.