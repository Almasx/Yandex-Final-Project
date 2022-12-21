import { object, string } from "zod";
import { router, publicProcedure } from "../trpc";

export const offerRouter = router({
  postOffer: publicProcedure
    .input(
      object({
        clientName: string(),
        email: string(),
        message: string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const { clientName, email, message } = input;
      return ctx.prisma.offer.create({
        data: { clientName, email, message },
      });
    }),
});
