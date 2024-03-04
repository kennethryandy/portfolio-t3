import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";


export const experienceRouter = createTRPCRouter({
 getAll: publicProcedure.query(async ({ ctx }) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return ctx.db.experience.findMany({ orderBy: { order: "asc" } });
 }),
 // new: publicProcedure.input()
});