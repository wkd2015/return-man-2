import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CircleHelp,
  Gamepad2,
  Keyboard,
  KeyRound,
  Lightbulb,
  MessageSquareText,
  Trophy,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

function SeoSection({
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
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

export function ReturnMan2SeoArticle() {
  return (
    <div className="space-y-6 bg-gradient-to-b from-muted/40 via-background to-muted/20 px-4 py-10 dark:from-zinc-950 dark:via-zinc-900/90 dark:to-zinc-950">
      <div className="mx-auto max-w-3xl space-y-6 text-left text-base leading-relaxed">
        <p className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-amber-500/35 bg-amber-500/5 px-4 py-3 text-center text-sm text-muted-foreground dark:border-amber-400/25 dark:bg-amber-500/10">
          <Gamepad2 className="size-4 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
          <span>
            Full guide below — headings and copy are unchanged for search
            engines; scan the icons to jump topics.
          </span>
        </p>

        <SeoSection headingId="about-heading" icon={Trophy} title="About Return Man 2">
          <h3 className="text-lg font-semibold text-foreground">
            What kind of game is Return Man 2?
          </h3>
          <p>
            <em>Return Man 2</em> is an American football kick-return game with
            retro presentation, originally associated with Mini Monster Media and
            widely resurfaced on modern portals as a Flash-emulated browser
            experience. It is the second entry in the <em>Return Man</em> series
            and focuses on fast runs, timing, and special moves rather than full
            eleven-on-eleven simulation. If you are searching for{" "}
            <strong>return man 2 unblocked</strong>, you are usually looking for
            exactly this: a tab-based version you can launch without installing an
            executable.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Levels, challenges, and how progression works
          </h3>
          <p>
            The core loop rewards clean execution: you unlock new stages as you
            clear existing ones, while defenders react faster and collisions
            become less forgiving. Sources consistently describe escalating
            difficulty as you advance, so the early levels are the right place to
            internalize movement and special-move cadence before the field feels
            crowded.
          </p>
        </SeoSection>

        <SeoSection
          headingId="how-heading"
          icon={BookOpen}
          title="How to Play Return Man 2"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Catch the kickoff at the yellow circle
          </h3>
          <p>
            Your first job on each attempt is to reach the highlighted landing
            zone in time. The ball targets a yellow circle; if you are not there
            when the play expects you to be, the sequence falls apart and you
            never get a chance to build momentum downfield.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Reach the end zone without getting tackled
          </h3>
          <p>
            After the catch, treat every step as a risk-reward calculation.
            Defenders close space quickly, so hug blocks when you can, widen your
            path when you must, and remember that not every sprint is worth the
            exposure it creates.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            What happens if you do not score?
          </h3>
          <p>
            If you fail to reach the end zone in time, you can lose the possession
            outright—think of it as the game forcing you to reset and try a
            cleaner lane. This is one of the most common frustration points for
            new players, and it is completely normal on tighter levels.
          </p>
        </SeoSection>

        <SeoSection
          headingId="controls-heading"
          icon={Keyboard}
          title="Controls for Return Man 2"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Movement: IJKL or arrow keys
          </h3>
          <p>
            Most listings agree on the same baseline: use{" "}
            <strong>IJKL</strong> or the <strong>arrow keys</strong> to move. On a
            laptop without a dedicated number pad, arrows are typically the most
            comfortable default.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Sprinting and dodging with the arrow keys
          </h3>
          <p>
            Community write-ups note that the up arrow doubles as a sprint input,
            while left and right help you slip tackles when timed correctly. That
            means your thumbs are doing double duty: steering <em>and</em>{" "}
            deciding when to commit to a burst.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Special moves on A, S, and D
          </h3>
          <p>
            Once unlocked, special abilities map to <strong>A</strong>,{" "}
            <strong>S</strong>, and <strong>D</strong>. You should expect to
            unlock them over time rather than having the full toolkit on stage
            one—plan early levels around fundamentals, not flashy finishers.
          </p>
        </SeoSection>

        <SeoSection
          headingId="special-heading"
          icon={Zap}
          title="Special Moves in Return Man 2"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Spin (A), speed burst (S), and front flip (D)
          </h3>
          <p>
            The names that appear most often are <strong>spin</strong>,{" "}
            <strong>speed burst</strong> (sometimes written as speedboost), and{" "}
            <strong>front flip</strong>. Each fills a different gap: spin and flip
            style moves help you clear immediate contact, while burst helps you
            erase distance when a lane opens for a half second.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Charge bars and when to use each move
          </h3>
          <p>
            Sources mention charge meters for specials, which is a polite way of
            saying you cannot mash your way to victory. Bank a move for the tackle
            animation that would otherwise end the run, not for style points on
            open grass.
          </p>
        </SeoSection>

        <SeoSection
          headingId="tips-heading"
          icon={Lightbulb}
          title="Return Man 2 Tips and Tricks"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Timing spins and jukes to slip tackles
          </h3>
          <p>
            Advanced play is less about reflex bravado and more about rhythm. A
            spin that fires too early still leaves you in the tackle box; a spin
            that fires late never starts. Treat every defender animation as a cue,
            not a nuisance.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Reading defenders and choosing your route
          </h3>
          <p>
            As levels climb, defenders are described as more aggressive about
            cutting angles. That makes “default routes” unreliable. Pause half a
            beat at the catch, identify the widest cushion, and accept that
            sometimes the correct path is backward before it is forward.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Managing your special-move charges
          </h3>
          <p>
            If charges are limited, the dominant strategy is to spend them on
            guaranteed stops, not hypothetical openings. The speed burst that saves
            a possession is worth infinitely more than the burst that wins a
            footrace you were already winning.
          </p>
        </SeoSection>

        <SeoSection
          headingId="codes-heading"
          icon={KeyRound}
          title="Return Man 2 Codes: What We Know"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Verified unlock codes
          </h3>
          <p>
            Players frequently search for <strong>return man 2 codes</strong>, but
            the research notes bundled with this page did not surface a verified,
            publisher-backed code table. What <em>is</em> documented across
            sources is the steady unlock of special moves through normal
            progression—not a cheat sheet of numeric codes. We are intentionally
            not inventing codes here; if you need trustworthy secrets, prioritize
            primary developer communications or patch notes, not random SEO pages.
          </p>
        </SeoSection>

        <SeoSection
          headingId="faq-heading"
          icon={CircleHelp}
          title="Return Man 2 Unblocked FAQ"
        >
          <div className="space-y-4">
            <FaqItem
              question="Is Return Man 2 unblocked in the browser?"
              answer='Yes—that is the entire point of the modern "unblocked" framing. This build loads inside an embedded player so you can start from a normal desktop browser session without a local install.'
            />
            <FaqItem
              question="Do I need to install anything?"
              answer="You should not need an installer. Keep your browser updated for the best compatibility with emulated Flash-era content, and close heavy background tabs if the frame stutters."
            />
            <FaqItem
              question="Which keys should I use on a laptop?"
              answer="Arrow keys are the usual starting point. If you prefer WASD-adjacent ergonomics, try IJKL and see which feels more precise for diagonal cuts."
            />
            <FaqItem
              question="Why do I keep losing possession?"
              answer="Most often it is a combination of late reactions at the catch, greedy sprinting into traffic, or spending specials on low-value moments. Replay the same stage focusing on one fix at a time."
            />
            <FaqItem
              question="Does the kicker or route choice matter?"
              answer="Commentary from strategy summaries calls out the kicker as a pacing factor that can slow you down, which makes route selection and timing as important as raw movement speed. If a path ignores that pressure, it is probably the wrong path."
            />
          </div>
        </SeoSection>

        <SeoSection
          headingId="reviews-heading"
          icon={MessageSquareText}
          title="Player comments"
        >
          <p>
            User-generated comments will appear here after the moderation pipeline
            and Turnstile checks are wired to the backend. For now, treat gameplay
            help inside this guide as the authoritative on-page reference.
          </p>
        </SeoSection>
      </div>
    </div>
  );
}
