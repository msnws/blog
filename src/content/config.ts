// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // This will coerce strings to dates
    description: z.string(),
    author: z.string().optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
