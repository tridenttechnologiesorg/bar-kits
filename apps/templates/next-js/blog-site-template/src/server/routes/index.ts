import { OpenAPIHono } from "@hono/zod-openapi";
import { blogRoutes } from "./blog";

const app = new OpenAPIHono();

app.route("/blog", blogRoutes);

export { app as indexRoutes };
