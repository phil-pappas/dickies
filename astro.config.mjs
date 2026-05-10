import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

// Static one-page site, deployable to Cloudflare Pages (build: `npm run build`, output: `dist/`).
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  adapter: cloudflare()
});