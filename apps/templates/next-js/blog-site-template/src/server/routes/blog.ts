import { OpenAPIHono } from "@hono/zod-openapi";
import { getAllBlogsController } from "../controllers/blog/get-all-blogs.controller";
import { createBlogController } from "../controllers/blog/create-blog.controller";
import { updateBlogController } from "../controllers/blog/update-blog.controller";
import { deleteBlogController } from "../controllers/blog/delete-blog.controller";
import { createRoute, z } from "@hono/zod-openapi";
import { getBlogByIdController } from "../controllers/blog/get-blog-by-id.controller";
import { authMiddleware, requireAuth } from "../middlewars/auth.middleware";

const app = new OpenAPIHono();

app.openapi(
  createRoute({
    method: "get",
    path: "/",
    tags: ["Blogs"],
    summary: "Get all blogs",
    description: "Retrieve a list of all blogs with pagination and search",
    responses: {
      200: {
        description: "List of blogs retrieved successfully",
      },
      500: {
        description: "Server error",
      },
    },
  }),
  getAllBlogsController
);

app.openapi(
  createRoute({
    method: "get",
    path: "/:id",
    tags: ["Blogs"],
    summary: "Get a blog by ID",
    description: "Retrieve a specific blog by its ID",
    request: {
      params: z.object({
        id: z.string().describe("The blog ID"),
      }),
    },
    responses: {
      200: {
        description: "Blog retrieved successfully",
      },
      404: {
        description: "Blog not found",
      },
      500: {
        description: "Server error",
      },
    },
  }),
  getBlogByIdController
);

app.use("/*/protected/*", authMiddleware, requireAuth);

app.openapi(
  createRoute({
    method: "post",
    path: "/protected",
    tags: ["Blogs"],
    security: [{ BearerAuth: [] }],
    summary: "Create a new blog",
    description: "Create a new blog post (requires authentication)",
    request: {
      body: {
        content: {
          "application/json": {
            schema: z.object({
              title: z.string().min(1).describe("Blog title"),
              content: z.string().min(1).describe("Blog content"),
            }),
          },
        },
      },
    },
    responses: {
      201: {
        description: "Blog created successfully",
      },
      400: {
        description: "Invalid request data",
      },
      401: {
        description: "Unauthorized",
      },
      500: {
        description: "Server error",
      },
    },
  }),
  createBlogController
);

app.openapi(
  createRoute({
    method: "put",
    path: "/protected/:id",
    tags: ["Blogs"],
    security: [{ BearerAuth: [] }],
    summary: "Update a blog",
    description:
      "Update an existing blog post (requires authentication and ownership)",
    request: {
      params: z.object({
        id: z.string().describe("The blog ID"),
      }),
      body: {
        content: {
          "application/json": {
            schema: z.object({
              title: z.string().min(1).optional().describe("Blog title"),
              content: z.string().min(1).optional().describe("Blog content"),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Blog updated successfully",
      },
      400: {
        description: "Invalid request data",
      },
      401: {
        description: "Unauthorized",
      },
      403: {
        description:
          "Forbidden - You don't have permission to update this blog",
      },
      404: {
        description: "Blog not found",
      },
      500: {
        description: "Server error",
      },
    },
  }),
  updateBlogController
);

app.openapi(
  createRoute({
    method: "delete",
    path: "/protected/:id",
    tags: ["Blogs"],
    security: [{ BearerAuth: [] }],
    summary: "Delete a blog",
    description:
      "Delete an existing blog post (requires authentication and ownership)",
    request: {
      params: z.object({
        id: z.string().describe("The blog ID"),
      }),
    },
    responses: {
      200: {
        description: "Blog deleted successfully",
      },
      401: {
        description: "Unauthorized",
      },
      403: {
        description:
          "Forbidden - You don't have permission to delete this blog",
      },
      404: {
        description: "Blog not found",
      },
      500: {
        description: "Server error",
      },
    },
  }),
  deleteBlogController
);

export { app as blogRoutes };
