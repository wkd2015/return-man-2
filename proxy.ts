import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * 旧版 `/en` 路径兼容：索引与外链仍可能指向该 URL。
 * 301 合并到根路径，避免 404 与权重分散。
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  const stripped = pathname.slice(3);
  url.pathname =
    stripped === "" || stripped === "/"
      ? "/"
      : stripped.startsWith("/")
        ? stripped
        : `/${stripped}`;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/en", "/en/:path*"],
};
