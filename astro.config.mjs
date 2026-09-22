import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://astodev.com',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
