import { auth } from "@/lib/auth";
import { type User, type Session } from "@/types/db";
import { MiddlewareHandler } from "hono";

/**
 * Authentication middleware that validates the user session
 * and redirects to login page or returns appropriate status codes
 * if authentication fails.
 */
export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authSession = await auth.api.getSession({ headers: c.req.raw.headers });

  // No session found - set null values and continue
  if (!authSession) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  // Set the user and session data
  c.set("user", {
    ...authSession.user,
    password: null,
    image: authSession.user.image || null,
  } as User);

  c.set("session", {
    ...authSession.session,
    ipAddress: authSession.session.ipAddress || null,
    userAgent: authSession.session.userAgent || null,
  } as Session);

  return next();
};

/**
 * Protected route middleware that ensures a user is authenticated
 * Returns 401 Unauthorized if no valid session exists
 */
export const requireAuth: MiddlewareHandler = async (c, next) => {
  const user = c.get("user");
  const session = c.get("session");

  if (!user || !session) {
    return c.json(
      { 
        error: "Unauthorized", 
        message: "Authentication required" 
      }, 
      401
    );
  }

  // Session token has expired
  if (session.expiresAt < new Date()) {
    return c.json(
      { 
        error: "Unauthorized", 
        message: "Session expired" 
      }, 
      401
    );
  }

  return next();
};

/**
 * Redirect middleware for web routes that need authentication
 * Redirects to login page if user is not authenticated
 */
export const requireAuthRedirect: MiddlewareHandler = async (c, next) => {
  const user = c.get("user");
  
  if (!user) {
    // For web routes, redirect to login page
    return c.redirect("/auth/login");
  }

  return next();
};