// Schemas for astro collections
import { defineCollection, z } from "astro:content";

const resources = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
    })
});

export const collections = { resources };