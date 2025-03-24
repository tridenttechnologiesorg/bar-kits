import db from "@/database";
import { ApiResponse } from "@/types/api/common";
import { blog, Blog } from "@/types/db";
import { log } from "@/utils/configs/logger.config";
import { eq } from "drizzle-orm";
import { Context } from "hono";
import { type User } from "@/types/db";

export const updateBlogController = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const user = c.get("user") as User;
    const { title, content } = (await c.req.json()) as {
      title?: string;
      content?: string;
    };

    const [existingBlog] = await db.select().from(blog).where(eq(blog.id, id));

    if (!existingBlog) {
      const notFoundResponse: ApiResponse = {
        success: false,
        message: "Blog not found",
        data: null,
        error: "Blog with the specified ID does not exist",
      };

      return c.json(notFoundResponse, 404);
    }

    if (existingBlog.userId !== user.id) {
      const unauthorizedResponse: ApiResponse = {
        success: false,
        message: "Unauthorized",
        data: null,
        error: "You don't have permission to update this blog",
      };

      return c.json(unauthorizedResponse, 403);
    }

    const updateValues: Partial<Blog> = {};
    if (title !== undefined) updateValues.title = title;
    if (content !== undefined) updateValues.content = content;
    updateValues.updatedAt = new Date();

    // Update the blog
    const [updatedBlog] = await db
      .update(blog)
      .set(updateValues)
      .where(eq(blog.id, id))
      .returning();

    const response: ApiResponse<Blog> = {
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
      error: null,
    };

    return c.json(response, 200);
  } catch (error) {
    log.error("Error has occurred while updating blog", { error });

    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to update blog",
      data: null,
      error: error instanceof Error ? error.message : "Server error",
    };

    return c.json(errorResponse, 400);
  }
};
