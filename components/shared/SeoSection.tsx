import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function SeoSection({
  headingId,
  icon: Icon,
  title,
  children,
}: {
  headingId: string;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className="scroll-mt-6 rounded-2xl border border-border/70 bg-card/50 p-5 shadow-sm backdrop-blur-sm transition-colors dark:border-white/10 dark:bg-zinc-900/45 sm:p-6"
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="flex flex-wrap items-center gap-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
      >
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/30 to-emerald-600/25 ring-1 ring-amber-500/35 dark:from-amber-500/20 dark:to-emerald-600/15"
          aria-hidden
        >
          <Icon className="size-5 text-amber-600 dark:text-amber-400" />
        </span>
        {title}
      </h2>
      <div className="mt-5 space-y-4 border-t border-border/60 pt-5 text-muted-foreground dark:border-white/10">
        {children}
      </div>
    </section>
  );
}
