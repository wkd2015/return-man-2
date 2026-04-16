import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Gamepad2 } from "lucide-react";

import { WalkthroughArticle } from "@/components/guides/WalkthroughArticle";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { getSiteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Return Man 2 Walkthrough — Ultimate Strategy Guide";
const PAGE_DESCRIPTION =
  "Complete Return Man 2 walkthrough with controls mastery, special moves, Mud Bowl tactics, and pro tips from the community. Master every stage now.";

export async function generateMetadata(): Promise<Metadata> {
  const base = getSiteUrl();
  const canonical = `${base}/guides/return-man-2-ultimate-walkthrough`;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: { canonical },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: canonical,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
    },
  };
}

export default function WalkthroughPage() {
  const base = getSiteUrl();
  const pageUrl = `${base}/guides/return-man-2-ultimate-walkthrough`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Return Man 2 Walkthrough: The Ultimate Strategy Guide",
    description: PAGE_DESCRIPTION,
    url: pageUrl,
    about: {
      "@type": "VideoGame",
      "@id": `${base}/#game`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <header className="relative overflow-hidden border-b border-amber-500/25 bg-gradient-to-br from-amber-50 via-white to-emerald-50/90 px-4 py-8 text-center sm:py-10 dark:border-amber-500/20 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/60">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(217,119,6,0.06) 24px, rgba(217,119,6,0.06) 25px)",
            }}
            aria-hidden
          />
          <div className="absolute right-3 top-3 z-10 sm:right-5 sm:top-5">
            <ThemeToggle />
          </div>
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-3 inline-flex items-center justify-center gap-2 rounded-full border border-amber-600/25 bg-amber-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200/95">
              <BookOpen className="size-3.5" aria-hidden />
              Strategy Guide · Walkthrough
            </p>
            <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Return Man 2 Walkthrough: The Ultimate Strategy Guide
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground dark:text-zinc-300 sm:text-base">
              Master every control, special move, and field condition. From
              beginner catches to Stage 15 — this is the only{" "}
              <em>Return Man 2 walkthrough</em> you need.
            </p>
            <div className="mt-5">
              <Link
                href="/"
                className={cn(buttonVariants({ size: "lg" }), "gap-2")}
              >
                <Gamepad2 className="size-4" aria-hidden />
                Play Return Man 2 Unblocked Now
              </Link>
            </div>
          </div>
        </header>

        <WalkthroughArticle />

        <section className="border-t border-amber-500/20 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 px-4 py-10 text-center dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/50">
          <div className="mx-auto max-w-xl">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Ready to Play?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Put this <em>Return Man 2 walkthrough</em> into practice. Hit the
              field and start scoring.
            </p>
            <div className="mt-5">
              <Link
                href="/"
                className={cn(buttonVariants({ size: "lg" }), "gap-2")}
              >
                <Gamepad2 className="size-4" aria-hidden />
                Start Return Man 2 Unblocked
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
