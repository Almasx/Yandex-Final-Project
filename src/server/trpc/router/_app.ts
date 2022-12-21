import { router } from "../trpc";
import { offerRouter } from "./offer";
import { projectRouter } from "./project";

export const appRouter = router({
  offer: offerRouter,
  projects: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
