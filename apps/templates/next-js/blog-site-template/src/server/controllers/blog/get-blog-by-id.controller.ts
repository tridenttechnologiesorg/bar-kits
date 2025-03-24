import db from "@/database";
import { ApiResponse } from "@/types/api/common";
import { blog, Blog } from "@/types/db";
import { log } from "@/utils/configs/logger.config";
import { eq } from "drizzle-orm";
import { Context } from "hono";

export const getBlogByIdController = async (c: Context) => {
  try {
    const id = c.req.param("id");

    const [foundBlog] = await db.select().from(blog).where(eq(blog.id, id));

    if (!foundBlog) {
      const notFoundResponse: ApiResponse = {
        success: false,
        message: "Blog not found",
        data: null,
        error: "Blog with the specified ID does not exist",
      };

      return c.json(notFoundResponse, 404);
    }

    const response: ApiResponse<Blog> = {
      success: true,
      message: "Blog retrieved successfully",
      data: foundBlog,
      error: null,
    };

    return c.json(response, 200);
  } catch (error) {
    log.error("Error has occurred while retrieving blog", { error });

    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to retrieve blog",
      data: null,
      error: error instanceof Error ? error.message : "Server error",
    };

    return c.json(errorResponse, 500);
  }
};
