import db from "@/database";
import { ApiResponse } from "@/types/api/common";
import { blog, type User, type Blog } from "@/types/db";
import { log } from "@/utils/configs/logger.config";
import { Context } from "hono";

export const createBlogController = async (c: Context) => {
  try {
    const { title, content } = (await c.req.json()) as {
      title: string;
      content: string;
    };

    const user = c.get("user") as User;

    const [createdBlog] = await db
      .insert(blog)
      .values({
        title,
        content,
        userId: user.id,
      })
      .returning();

    const response: ApiResponse<Blog> = {
      success: true,
      message: "Blog created successfully",
      data: createdBlog,
      error: null,
    };

    return c.json(response, 201);
  } catch (error) {
    log.error("Error has occurred while creating blog", { error });

    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to create blog",
      data: null,
      error: error instanceof Error ? error.message : "Invalid request",
    };

    return c.json(errorResponse, 400);
  }
};
