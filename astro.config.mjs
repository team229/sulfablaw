import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.sulfablaw.com',
  trailingSlash: 'never',
  integrations: [react(), sitemap()],
  output: 'static',
  compressHTML: true,
  server: {
    allowedHosts: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
