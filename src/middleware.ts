import { type NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

export function middleware(req: NextRequest) {
 if (env.NODE_ENV === "development") return;
 const url = req.nextUrl;
 const super_secret = process.env.DASHBOARD_SECRET;
 const isAllowed = (!!url.search && !!super_secret) && url.searchParams.get("secret") === super_secret;
 if (!isAllowed) {
  return NextResponse.redirect(new URL("/", req.url));
 }
}

export const config = {
 matcher: '/dashboard/experience'
}