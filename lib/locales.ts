/** 子路径多语言；新增语言时同步更新 sitemap 与 layout 校验。 */
export const LOCALES = ["en"] as const;

export type AppLocale = (typeof LOCALES)[number];
