import { auth } from "@/lib/auth";
import { type User, type Session } from "@/types/db";
import { MiddlewareHandler } from "hono";

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authSession = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!authSession) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

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