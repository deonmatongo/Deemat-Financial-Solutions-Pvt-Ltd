import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let the maintenance page and its assets through
  if (pathname.startsWith("/maintenance")) {
    return NextResponse.next();
  }

  // Rewrite everything else to /maintenance (URL stays unchanged)
  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.ico).*)"],
};
