import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Next.js 16+：原 middleware 更名为 proxy，避免开发与客户端路由找不到 middleware 模块。 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
