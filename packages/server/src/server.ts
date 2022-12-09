import express from "express";
import cors from "cors";

import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./routes/_app";
import { createContext } from "./trpc/context";

require("dotenv").config({ path: "../" });
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  "/api/",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(port, () => console.log(`Server started on port ${port}`));
