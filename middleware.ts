import { updateSession } from "@/lib/supabase/middleware";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Set pathname header so root layout can detect admin routes
  const isAdmin = request.nextUrl.pathname.startsWith("/admin");

  if (isAdmin) {
    return await updateSession(request);
  }

  // For non-admin routes, just pass through with the pathname header
  const response = NextResponse.next({ request });
  response.headers.set("x-next-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
