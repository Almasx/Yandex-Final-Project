import { router } from "../trpc/trpc";
export const appRouter = router({
  // genre: genreRouter,
  // static: staticRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
