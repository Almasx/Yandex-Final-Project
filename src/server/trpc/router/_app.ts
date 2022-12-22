import { router } from "../trpc";
import { authorRouter } from "./author";
import { offerRouter } from "./offer";
import { projectRouter } from "./project";

export const appRouter = router({
  offer: offerRouter,
  projects: projectRouter,
  author: authorRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
