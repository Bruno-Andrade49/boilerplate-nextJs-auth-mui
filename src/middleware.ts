import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  const signInUrl = new URL("/", request.url);
  const homeURL = new URL("/home", request.url)

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInUrl);
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(homeURL);
  }

}

export const config = {
  matcher: ["/", "/home/:path*"]
}