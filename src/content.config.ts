import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    navLabel: z.string(),
    eyebrow: z.string(),
    lede: z.string(),
    category: z.enum(['practice', 'location', 'firm']),
    order: z.number().default(99),
    caseType: z.string().optional(),
    image: z.enum(['practice', 'location', 'firm']).default('practice'),
    updated: z.string().optional(),
  }),
});

export const collections = { pages };
