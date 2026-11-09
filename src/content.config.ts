import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Astodev'),
    image: z
      .string()
      .regex(/^\/img\/blog\/[a-z0-9-]+\.(jpg|jpeg|png|webp)$/, 'Imagen debe estar en /img/blog/ y ser jpg, png o webp')
      .optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
