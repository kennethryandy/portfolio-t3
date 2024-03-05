import * as z from 'zod';
import { createTRPCRouter, privateProcedure, publicProcedure } from "@/server/api/trpc";

export const experienceRouter = createTRPCRouter({
 getAll: publicProcedure.query(({ ctx }) => {
  return ctx.db.query.project.findMany({
   with: {
    image: true
   },
   orderBy: (proj, { asc }) => [asc(proj.order)]
  })
 }),
});