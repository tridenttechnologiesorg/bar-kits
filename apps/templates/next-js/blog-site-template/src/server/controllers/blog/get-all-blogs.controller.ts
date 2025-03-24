import db from "@/database";
import { ApiResponse, PaginatedResponse } from "@/types/api/common";
import { blog, Blog } from "@/types/db";
import { log } from "@/utils/configs/logger.config";
import { SearchHelper } from "@/utils/helpers/search-helper";
import { SQL, Column, eq, like, or, sql, asc, desc } from "drizzle-orm";
import { Context } from "hono";

export const getAllBlogsController = async (c: Context) => {
  try {
    const page = parseInt(c.req.query("page") || "1", 10);
    const pageSize = parseInt(c.req.query("pageSize") || "10", 10);

    if (page < 1 || pageSize < 1 || pageSize > 100) {
      const invalidParamsResponse: ApiResponse = {
        success: false,
        message: "Invalid pagination parameters",
        data: null,
        error: "Page must be >= 1 and pageSize must be between 1 and 100",
      };
      return c.json(invalidParamsResponse, 400);
    }

    const offset = (page - 1) * pageSize;

    const search = c.req.query("search");
    const title = c.req.query("title");
    const content = c.req.query("content");
    const userId = c.req.query("userId");
    const sortByParam = c.req.query("sortBy") || "createdAt";
    const sortOrder =
      c.req.query("sortOrder")?.toLowerCase() === "asc" ? "asc" : "desc";

    const searchHelper = new SearchHelper({
      title: blog.title,
      content: blog.content,
      userId: blog.userId,
      id: blog.id,
    });

    searchHelper
      .contains("title", title)
      .contains("content", content)
      .equals("userId", userId);

    if (search) {
      searchHelper.search(search, ["title", "content"]);
    }

    const whereClause = searchHelper.getWhereClause();

    let sortColumn: any;
    if (sortByParam === "title") sortColumn = blog.title;
    else if (sortByParam === "content") sortColumn = blog.content;
    else if (sortByParam === "userId") sortColumn = blog.userId;
    else if (sortByParam === "id") sortColumn = blog.id;
    else sortColumn = blog.createdAt;

    let countResult;
    if (whereClause) {
      countResult = await db
        .select({ count: sql<number>`count(*)` })
        .from(blog)
        .where(whereClause);
    } else {
      countResult = await db
        .select({ count: sql<number>`count(*)` })
        .from(blog);
    }
    const [{ count }] = countResult;

    let blogsResult;
    if (whereClause) {
      blogsResult = await db
        .select()
        .from(blog)
        .where(whereClause)
        .orderBy(sortOrder === "asc" ? asc(sortColumn) : desc(sortColumn))
        .limit(pageSize)
        .offset(offset);
    } else {
      blogsResult = await db
        .select()
        .from(blog)
        .orderBy(sortOrder === "asc" ? asc(sortColumn) : desc(sortColumn))
        .limit(pageSize)
        .offset(offset);
    }

    const totalPages = Math.ceil(count / pageSize);

    const response: PaginatedResponse<Blog> = {
      success: true,
      message: "Blogs retrieved successfully",
      data: {
        items: blogsResult,
        metadata: {
          total: count,
          page,
          pageSize,
          totalPages,
          hasNext: page < totalPages,
          hasPrevious: page > 1,
        },
      },
      error: null,
    };

    return c.json(response, 200);
  } catch (error) {
    log.error("Error has occurred while retrieving blogs", { error });

    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to retrieve blogs",
      data: null,
      error: error instanceof Error ? error.message : "Server error",
    };

    return c.json(errorResponse, 500);
  }
};
