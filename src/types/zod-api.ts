import * as z from 'zod';

export const newProjectInput = z.object({
 order: z.number().min(1),
 title: z.string().max(255),
 url: z.string().max(255),
 sourceCode: z.string().max(255),
 type: z.enum(["featured", "archived"]),
 description: z.string().min(1),
 image: z.number().min(1),
 technologies: z.array(z.string().max(255)),
});