import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

/**
 * 构建时生成 /sitemap.xml。英文站：收录首页与攻略内页。
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
    {
      url: `${base}/guides/return-man-2-ultimate-walkthrough`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
