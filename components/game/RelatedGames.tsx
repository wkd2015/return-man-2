import { ExternalLink, Gamepad2, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

const PLACEHOLDER_CARDS = [
  {
    title: "More football browser games",
    description:
      "Explore other American football and sports arcade titles while you wait for more Return Man pages on this site.",
    href: "https://www.crazygames.com/c/sports",
    external: true,
    icon: Trophy,
  },
  {
    title: "Return Man 2 on CrazyGames",
    description:
      "Compare controls and pacing with another well-known browser listing of the same franchise.",
    href: "https://www.crazygames.com/game/return-man-2",
    external: true,
    icon: Gamepad2,
  },
  {
    title: "Retro sports & Flash-era classics",
    description:
      "Discover emulated classics and modern remakes that play directly in the tab—no install required.",
    href: "https://www.crazygames.com/tag/retro",
    external: true,
    icon: Sparkles,
  },
] as const;

export function RelatedGames() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PLACEHOLDER_CARDS.map((card) => {
        const Icon = card.icon;
        return (
          <li key={card.title}>
            <Link
              href={card.href}
              className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/60 p-4 text-card-foreground shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/40 hover:shadow-md hover:shadow-amber-500/10 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:border-amber-400/35"
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/25 to-emerald-600/20 ring-1 ring-amber-500/25 transition-colors group-hover:from-amber-500/35 group-hover:to-emerald-600/30">
                <Icon
                  className="size-5 text-amber-600 dark:text-amber-400"
                  aria-hidden
                />
              </span>
              <span className="mt-3 text-base font-semibold">{card.title}</span>
              <span className="mt-2 flex-1 text-sm text-muted-foreground">
                {card.description}
              </span>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400">
                {card.external ? "Open link" : "View"}
                <ExternalLink className="size-3.5 opacity-70" aria-hidden />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
