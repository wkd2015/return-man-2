import { notFound } from "next/navigation";

import { LOCALES } from "@/lib/locales";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) {
    notFound();
  }

  return children;
}
