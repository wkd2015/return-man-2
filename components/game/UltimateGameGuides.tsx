import Link from "next/link";
import { BookOpen } from "lucide-react";

const GUIDE_CARDS = [
  {
    href: "/guides/return-man-2-ultimate-walkthrough",
    anchorText: "Return Man 2 Ultimate Walkthrough",
    description:
      "Controls mastery, Mud Bowl tactics, Stage 15 focus, and community-tested Return Man 2 strategy — one deep walkthrough for serious returners.",
  },
] as const;

export function UltimateGameGuides() {
  return (
    <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-1">
      {GUIDE_CARDS.map((card) => (
        <li key={card.href}>
          <Link
            href={card.href}
            className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/60 p-5 text-card-foreground shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/40 hover:shadow-md hover:shadow-amber-500/10 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:border-amber-400/35"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/25 to-emerald-600/20 ring-1 ring-amber-500/25 transition-colors group-hover:from-amber-500/35 group-hover:to-emerald-600/30">
              <BookOpen
                className="size-5 text-amber-600 dark:text-amber-400"
                aria-hidden
              />
            </span>
            <span className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {card.anchorText}
            </span>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {card.description}
            </p>
            <span className="mt-4 text-sm font-medium text-amber-600 dark:text-amber-400">
              Read the full walkthrough →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
