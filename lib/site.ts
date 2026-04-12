/**
 * 用于 metadataBase、canonical 等。Vercel 预览/生产未配 NEXT_PUBLIC_SITE_URL 时
 * 必须用 VERCEL_URL，否则图标与 OG 会错误解析成 http://localhost:3000。
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`.replace(/\/$/, "");
  return "http://localhost:3000";
}
