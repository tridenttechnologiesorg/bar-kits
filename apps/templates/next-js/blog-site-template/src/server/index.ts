import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference } from "@scalar/hono-api-reference";
import { auth } from "@/lib/auth";
import { cors } from "hono/cors";
import { authMiddleware } from "./middlewars/auth.middleware";

/**
 * This file is the entry point for the API server. It has basic setups like swagger and auth handlers
 */

const app = new OpenAPIHono();

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

app.use("*", authMiddleware);

app.use(
  "/api/auth/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.doc31("/api/swagger.json", {
  openapi: "3.1.0",
  info: { title: "Bar-Kits Blog Site Template ❤️‍🔥", version: "1.0.0" },
});

app.get(
  "/api/scalar",
  apiReference({
    url: "/api/swagger.json",
  })
);

export default app;
