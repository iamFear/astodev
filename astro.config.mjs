import { defineConfig } from 'astro/config';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

export default defineConfig({
  site: 'https://astodev.com',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeSanitize,
        {
          ...defaultSchema,
          tagNames: (defaultSchema.tagNames || []).filter((t) => !['script', 'iframe', 'object', 'embed', 'form', 'input', 'style'].includes(t)),
        },
      ],
    ],
  },
});
