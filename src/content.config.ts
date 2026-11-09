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
      .regex(/img\/blog\/.+\.(jpg|jpeg|png|webp)$/i, 'Imagen debe estar en /img/blog/ y ser jpg, png o webp')
      .optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
