import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// Middleware function
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname contains the segment "admin"
  if (pathname.includes("admin")) {
    // Get the token from the request
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    // check if logged in otherwise redirect to login page
    if (!token) {
      const url = new URL("/", request.url);
      return NextResponse.redirect(url);
    }
  }

  // Return the response object
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
