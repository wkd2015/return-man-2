import type { Metadata } from "next";
import { Sparkles } from "lucide-react";

import { AdSlot } from "@/components/ads/AdSlot";
import { GameContainer } from "@/components/game/GameContainer";
import { RelatedGames } from "@/components/game/RelatedGames";
import { UltimateGameGuides } from "@/components/game/UltimateGameGuides";
import { ReturnMan2SeoArticle } from "@/components/game/ReturnMan2SeoArticle";
import { ThemeToggle } from "@/components/theme-toggle";
import { RETURN_MAN_2_IFRAME_SRC } from "@/lib/game-config";
import { getSiteUrl } from "@/lib/site";

const PAGE_TITLE = "Return Man 2 Unblocked | Play Free Online in Browser";
/** ~155 chars — CTA + core mechanics for SERP */
const PAGE_DESCRIPTION =
  "Play Return Man 2 unblocked free in your browser. Catch at the yellow circle, sprint to the end zone, use arrows or IJKL and A/S/D moves—no download. Start now.";

export async function generateMetadata(): Promise<Metadata> {
  const base = getSiteUrl();
  const canonical = base;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: { canonical },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: canonical,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
    },
  };
}

export default function HomePage() {
  const base = getSiteUrl();
  const pageUrl = base;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "@id": `${pageUrl}/#game`,
    name: "Return Man 2",
    description:
      "American football kick-return browser game: reach the yellow circle, carry the ball to the end zone, avoid tackles, unlock levels and special moves.",
    url: pageUrl,
    sameAs: RETURN_MAN_2_IFRAME_SRC,
    applicationCategory: "GameApplication",
    operatingSystem: "Web browser",
    author: {
      "@type": "Organization",
      name: "Mini Monster Media",
    },
    genre: "Sports game",
    playMode: "SinglePlayer",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <header className="relative overflow-hidden border-b border-amber-500/25 bg-gradient-to-br from-amber-50 via-white to-emerald-50/90 px-4 py-6 text-center sm:py-8 dark:border-amber-500/20 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/60">
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
              <Sparkles className="size-3.5" aria-hidden />
              Browser football · Unblocked
            </p>
            <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Return Man 2 Unblocked — Play Free in Your Browser
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground dark:text-zinc-300 sm:text-base">
              640×450 stage, letterboxed on large screens. Use fullscreen for
              stadium mode; arrows or IJKL plus A/S/D when you unlock moves.
            </p>
          </div>
        </header>

        <div className="hidden flex justify-center border-b border-border/60 bg-muted/20 px-4 py-3 dark:border-white/10 dark:bg-zinc-900/40">
          <AdSlot variant="leaderboard" slotId="hero-below" />
        </div>

        <section
          className="border-b border-border/80 bg-gradient-to-b from-zinc-100 to-muted/40 px-4 py-5 dark:border-white/10 dark:from-zinc-900 dark:to-zinc-950"
          aria-labelledby="play-heading"
        >
          <h2
            id="play-heading"
            className="mb-4 flex items-center justify-center gap-2 text-center text-lg font-bold tracking-tight text-foreground sm:text-xl"
          >
            <span
              className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/25 to-emerald-600/25 ring-1 ring-amber-500/30"
              aria-hidden
            >
              <Sparkles className="size-4 text-amber-600 dark:text-amber-400" />
            </span>
            Play Return Man 2 Unblocked Online Now
          </h2>
          <GameContainer iframeTitle="Return Man 2 — embedded game (unblocked)" />
        </section>

        <section
          className="border-b border-border/80 bg-background px-4 py-10 dark:border-white/10 dark:bg-zinc-950/40"
          aria-labelledby="guides-heading"
        >
          <h2
            id="guides-heading"
            className="mb-2 text-center text-2xl font-bold tracking-tight text-foreground"
          >
            Ultimate Game Guides
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            In-depth Return Man 2 walkthrough and strategy guides — same site, no
            install. Start with the ultimate guide below.
          </p>
          <UltimateGameGuides />
        </section>

        <section
          className="border-b border-border/80 bg-muted/25 px-4 py-10 dark:border-white/10 dark:bg-zinc-900/30"
          aria-labelledby="related-heading"
        >
          <h2
            id="related-heading"
            className="mb-2 text-center text-2xl font-bold tracking-tight text-foreground"
          >
            Related Games You Might Like
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-center text-sm text-muted-foreground">
            Hand-picked portals — same session, new tab.
          </p>
          <div className="mx-auto max-w-5xl">
            <RelatedGames />
          </div>
        </section>

        <div className="hidden flex justify-center border-b border-border/60 bg-background px-4 py-6 dark:border-white/10 dark:bg-zinc-950/50">
          <AdSlot variant="medium-rectangle" slotId="pre-content-seo" />
        </div>

        <ReturnMan2SeoArticle />
      </article>
    </>
  );
}
