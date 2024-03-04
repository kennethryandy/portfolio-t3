import * as z from 'zod';
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { experience } from '@/server/db/schema';


const newExperienceTypes = z.object({ order: z.number().min(1), title: z.string().min(1).max(255), year: z.string().min(1).max(255), role: z.string().min(1).max(255), description: z.string().min(1), technologies: z.array(z.string().min(1).max(255)) })

export const experienceRouter = createTRPCRouter({
 getAll: publicProcedure.query(async ({ ctx }) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return ctx.db.query.experience.findMany({
   orderBy: (exp, { asc }) => [asc(exp.order)]
  })
 }),
 new: publicProcedure.input(newExperienceTypes).mutation(({ ctx, input }) => {
  return ctx.db.insert(experience).values(input);
 })
});