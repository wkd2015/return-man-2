import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

/**
 * 构建时生成 /sitemap.xml。单页英文站：仅收录根路径。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
