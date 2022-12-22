import { router, publicProcedure } from "../trpc";

export const authorRouter = router({
  getAll: publicProcedure.query(({ input, ctx }) => {
    return ctx.prisma.author.findMany();
  }),
});
