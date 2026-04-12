import type { MetadataRoute } from "next";

import { LOCALES } from "@/lib/locales";
import { getSiteUrl } from "@/lib/site";

/**
 * 构建时生成 /sitemap.xml。新增游戏路由时在此或从数据源展开 URL。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return LOCALES.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}
