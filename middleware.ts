import { updateSession } from "@/lib/supabase/middleware";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const isAdmin = request.nextUrl.pathname.startsWith("/admin");

  if (isAdmin) {
    return await updateSession(request);
  }

  const response = NextResponse.next({ request });
  response.headers.set("x-next-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
