import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * 游戏 HTML 镜像、大图、视频等大流量静态资源应通过 CDN（如 Cloudflare R2）提供。
   * 启用时设置环境变量并在构建/运行期注入，例如：
   * assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
   */
};

export default nextConfig;
