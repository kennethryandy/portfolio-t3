import { createTRPCRouter, privateProcedure, publicProcedure } from "@/server/api/trpc";
import { newProjectInput } from '@/types/zod-api';
import { project } from '@/server/db/schema';

export const projectRouter = createTRPCRouter({
 getAll: publicProcedure.query(({ ctx }) => {
  return ctx.db.query.project.findMany({
   with: {
    media: true
   },
   orderBy: (proj, { asc }) => [asc(proj.order)]
  })
 }),
 new: privateProcedure.input(newProjectInput).mutation(({ ctx, input }) => {
  return ctx.db.insert(project).values(input).returning({ insertedId: project.id });
 })
});