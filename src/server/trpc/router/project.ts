import { number, object } from "zod";
import { router, publicProcedure } from "../trpc";

export const projectRouter = router({
  getProjects: publicProcedure
    .input(
      object({
        limit: number().min(1).max(3).nullish(),
        cursor: number().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const limit = input.limit ?? 2;
      const { cursor } = input;
      const projects = await ctx.prisma.project.findMany({
        include: { tech: true, author: true },
        cursor: cursor ? { id: cursor } : undefined,
        take: limit,
      });

      return {
        projects,
        nextId: projects.length === limit ? projects[1]?.id + 1 : undefined,
      };
    }),
});
