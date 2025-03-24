import db from "@/database";
import { blog } from "@/database/schema";
import { ApiResponse } from "@/types/api/common";
import { type Blog, type User } from "@/types/db";
import { log } from "@/utils/configs/logger.config";
import { eq } from "drizzle-orm";
import { Context } from "hono";

export const deleteBlogController = async (c: Context) => {
    try {
      const id = c.req.param("id");
      const user = c.get("user") as User;
  
      const [existingBlog] = await db
        .select()
        .from(blog)
        .where(eq(blog.id, id));
  
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
          error: "You don't have permission to delete this blog",
        };
        
        return c.json(unauthorizedResponse, 403);
      }
  
      const [deletedBlog] = await db
        .delete(blog)
        .where(eq(blog.id, id))
        .returning();
  
      const response: ApiResponse<Blog> = {
        success: true,
        message: "Blog deleted successfully",
        data: deletedBlog,
        error: null,
      };
  
      return c.json(response, 200);
    } catch (error) {
      log.error("Error has occurred while deleting blog", { error });
  
      const errorResponse: ApiResponse = {
        success: false,
        message: "Failed to delete blog",
        data: null,
        error: error instanceof Error ? error.message : "Server error",
      };
  
      return c.json(errorResponse, 500);
    }
  };