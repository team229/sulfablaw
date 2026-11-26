import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeWrapTables from './src/utils/rehype-wrap-tables.mjs';
import rehypeFaqAccordion from './src/utils/rehype-faq-accordion.mjs';

export default defineConfig({
  site: 'https://www.sulfablaw.com',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: true,
  integrations: [react(), sitemap()],
  server: {
    allowedHosts: true,
  },
  markdown: {
    rehypePlugins: [rehypeWrapTables, rehypeFaqAccordion],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
