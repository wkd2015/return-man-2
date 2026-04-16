import { CircleHelp } from "lucide-react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl border border-border/50 bg-background/40 px-4 py-3 dark:border-white/10 dark:bg-zinc-950/40">
      <h3 className="flex items-start gap-2 text-lg font-semibold text-foreground">
        <CircleHelp
          className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400/90"
          aria-hidden
        />
        <span>{question}</span>
      </h3>
      <p className="mt-2 border-l-2 border-emerald-500/40 pl-3 text-sm leading-relaxed sm:text-base">
        {answer}
      </p>
    </div>
  );
}
