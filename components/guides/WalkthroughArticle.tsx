import Link from "next/link";
import {
  CircleHelp,
  Gamepad2,
  Keyboard,
  Mountain,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import { FaqItem } from "@/components/shared/FaqItem";
import { SeoSection } from "@/components/shared/SeoSection";

export function WalkthroughArticle() {
  return (
    <div className="space-y-6 bg-gradient-to-b from-muted/40 via-background to-muted/20 px-4 py-10 dark:from-zinc-950 dark:via-zinc-900/90 dark:to-zinc-950">
      <div className="mx-auto max-w-3xl space-y-6 text-left text-base leading-relaxed">
        <p className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-amber-500/35 bg-amber-500/5 px-4 py-3 text-center text-sm text-muted-foreground dark:border-amber-400/25 dark:bg-amber-500/10">
          <Gamepad2
            className="size-4 shrink-0 text-amber-600 dark:text-amber-400"
            aria-hidden
          />
          <span>
            The complete Return Man 2 walkthrough — controls, special moves, Mud
            Bowl, pro tactics, and the hardest levels explained.
          </span>
        </p>

        {/* ── H2: Controls Mastery ── */}
        <SeoSection
          headingId="controls-mastery"
          icon={Keyboard}
          title="Controls Mastery: Your Keyboard Is the Playbook"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Movement layout — IJKL vs arrow keys
          </h3>
          <p>
            Every successful <em>Return Man 2 walkthrough</em> starts at the
            keyboard. The game offers two equivalent movement schemes:{" "}
            <strong>I/J/K/L</strong> and the <strong>arrow keys</strong>. Up (or
            I) moves your returner forward, Down (K) slows you down or retreats,
            Left (J) cuts left, and Right (L) cuts right. On a standard laptop
            keyboard without a number pad, arrows tend to feel more natural, but
            desktop players who also use A/S/D for specials often prefer IJKL to
            keep both hands in the same zone.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Sprint and dodge — one input, two jobs
          </h3>
          <p>
            A critical detail that many players miss in their first{" "}
            <em>Return Man 2 walkthrough</em> attempt: the up arrow doubles as a
            sprint trigger, while left and right arrows double as dodge inputs
            when timed against an incoming tackle. This means your directional
            keys are simultaneously steering <em>and</em> deciding when to
            commit to a burst of speed. Misreading that duality is the single
            biggest reason new players get tackled on open field — they sprint
            when they should be cutting, or they cut when a straight burst would
            have cleared the lane.
          </p>
          <p>
            Want to feel the difference immediately?{" "}
            <Link
              href="/"
              className="font-medium text-amber-600 underline underline-offset-4 hover:text-amber-500 dark:text-amber-400"
            >
              Play Return Man 2 online
            </Link>{" "}
            and spend the first three stages doing nothing but arrow-key movement
            — no specials, no heroics. Build the muscle memory first.
          </p>
        </SeoSection>

        {/* ── H2: Special Moves Decoded ── */}
        <SeoSection
          headingId="special-moves"
          icon={Zap}
          title="Special Moves Decoded: Spin, Speed Burst, and Front Flip"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Spin (A) — direct tackle escape
          </h3>
          <p>
            The <strong>Spin</strong> is your go-to when a defender closes in
            from the front or side. It triggers a quick directional change that
            slips contact if timed within the tackle window. In any{" "}
            <em>Return Man 2 walkthrough</em>, Spin is the move you will use
            most because frontal pressure is the most common threat pattern.
            Fire it too early and you rotate into dead space; fire it too late
            and the tackle animation has already locked on.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Speed Burst (S) — break through open lanes
          </h3>
          <p>
            <strong>Speed Burst</strong> gives a temporary acceleration boost
            that lets you outrun pursuing defenders. The ideal moment is when a
            gap appears ahead and pursuit is behind — not when defenders are
            directly in your path. Experienced players treat Speed Burst as a
            strategic resource: one well-timed burst that saves a possession is
            worth more than three bursts wasted on footraces you were already
            winning.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Front Flip (D) — clear low tackles
          </h3>
          <p>
            The <strong>Front Flip</strong> is an acrobatic leap that carries you
            over diving defenders and low tackles. It shines when the AI commits
            to a low-body dive — a pattern that becomes common in later stages.
            Because the flip covers horizontal distance, it can also function as
            a mini-burst through tight clusters where a normal sprint would
            result in collision.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Charge management — when NOT to use a special
          </h3>
          <p>
            Each special move runs on a charge bar. A full{" "}
            <em>Return Man 2 strategy</em> accounts for this: wasting a charge
            on a low-threat situation means you enter the real danger zone —
            typically the final 20 yards — without your best escape tools.
            Default rule: if you can dodge with pure movement, save the charge.
          </p>
        </SeoSection>

        {/* ── H2: Pro Tactics ── */}
        <SeoSection
          headingId="pro-tactics"
          icon={Users}
          title="Pro Tactics: The Community Playbook"
        >
          <p>
            The following <em>Return Man 2 strategy</em> tips are distilled from
            community discussions where experienced players share field-tested
            approaches. Each one targets a specific in-game situation.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            1. The Pivot Cut
          </h3>
          <p>
            After the catch, cut toward the short side of the field for about
            2–3 steps. Then pivot sharply in the opposite direction and
            immediately sprint. This pulling motion drags defenders toward your
            initial trajectory, opening the far sideline. It is one of the most
            reliable openers in any <em>Return Man 2 walkthrough</em> and works
            from Stage 1 through Stage 15.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            2. Pull the defense, then explode
          </h3>
          <p>
            Instead of sprinting immediately, jog slowly toward one sideline to
            bait the defensive formation into shifting. Once the opposite lane
            opens, cut hard and use Speed Burst. The key is patience — beginners
            panic and sprint into coverage, while veterans wait for the geometry
            to tilt in their favor.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            3. Never turbo into traffic
          </h3>
          <p>
            When defenders are directly ahead, triggering sprint or Speed Burst
            accelerates you straight into a tackle. Community consensus is clear:
            slow down, read the lanes, and only burst when the path is
            demonstrably open. This single discipline separates consistent
            scorers from players stuck on middle stages.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            4. Choose your return side deliberately
          </h3>
          <p>
            On punt returns, pick the left side, catch the ball, hurdle the first
            defender, then jog right to pull the coverage. When the left lane
            reopens, cut back and sprint. This sequence — catch, hurdle, pull,
            explode — is a repeatable formula that experienced players use as a
            default <em>Return Man 2 strategy</em> for mid-to-late levels.
          </p>
        </SeoSection>

        {/* ── H2: Mud Bowl ── */}
        <SeoSection
          headingId="mud-bowl"
          icon={Mountain}
          title="Mastering Field Conditions: The Mud Bowl Survival Guide"
        >
          <h3 className="text-lg font-semibold text-foreground">
            How mud changes your movement
          </h3>
          <p>
            <em>Return Man 2: Mud Bowl</em> introduces a muddy field surface
            that directly affects player movement. The slippery conditions reduce
            your grip on directional changes — sharp cuts that work on dry turf
            will overshoot on mud, sending you sliding past the gap you intended
            to thread. Any <em>Return Man 2 walkthrough</em> that ignores Mud
            Bowl is incomplete because the mode fundamentally alters the timing
            windows for every dodge and special move.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Adapting your strategy to slippery terrain
          </h3>
          <p>
            The core adaptation is anticipation over reaction. Start your cuts
            1–2 steps earlier than you would on dry ground. Avoid rapid
            direction reversals — the momentum will carry you into a tackle.
            Special moves still work, but the post-animation slide means you
            need a wider margin of safety. Spin in mud is riskier because the
            recovery arc is longer; Speed Burst is safer because it adds linear
            momentum that the mud cannot redirect.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            Stage unlocks in Mud Bowl
          </h3>
          <p>
            Like the main game, Mud Bowl stages unlock progressively. Each new
            stage combines the slippery surface with tighter defensive coverage,
            so the compounding difficulty is steeper than in the standard
            campaign. Treat early Mud Bowl stages as tutorials for the mud
            physics — master the slide before you face the elite defenders.
          </p>
        </SeoSection>

        {/* ── H2: Hardest Levels ── */}
        <SeoSection
          headingId="hardest-levels"
          icon={Trophy}
          title="The Road to Victory: Breaking Down the Hardest Levels"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Stage 15 — the ultimate challenge
          </h3>
          <p>
            Stage 15 is widely considered the final and hardest level in{" "}
            <em>Return Man 2</em>. Multiple elite defenders converge faster,
            coverage gaps shrink to near-zero, and the margin for error is a
            fraction of what early stages allow. Video walkthroughs confirm that
            the stage demands a combination of precise Pivot Cuts, disciplined
            charge management, and the patience to wait for lanes that barely
            exist. The recommended <em>Return Man 2 strategy</em> for Stage 15:
            reserve both Spin and Speed Burst charges entering the final 30
            yards, use the Pivot Cut on the catch, and commit to a single lane
            rather than dancing between multiple options.
          </p>
          <h3 className="text-lg font-semibold text-foreground">
            General hard-level strategy
          </h3>
          <p>
            Beyond Stage 15, the pattern for all hard levels follows the same
            logic: defensive AI becomes more aggressive, tackles come from wider
            angles, and blockers create less reliable lanes. The winning approach
            is to replay each level focusing on exactly one improvement per
            attempt — first fix the catch timing, then fix the initial route,
            then optimize special-move usage. Trying to fix everything at once
            leads to inconsistent runs. A disciplined{" "}
            <em>Return Man 2 walkthrough</em> treats every replay as a
            controlled experiment, not a random retry.
          </p>
        </SeoSection>

        {/* ── H2: FAQ ── */}
        <SeoSection
          headingId="walkthrough-faq"
          icon={CircleHelp}
          title="Return Man 2 Walkthrough FAQ"
        >
          <div className="space-y-4">
            <FaqItem
              question="What is the best strategy for a Return Man 2 walkthrough?"
              answer="Combine controls mastery with disciplined charge management. Learn the Pivot Cut for the catch phase, save specials for guaranteed escapes, and never sprint into frontal coverage. Consistency beats heroics."
            />
            <FaqItem
              question="How do I beat Stage 15 in Return Man 2?"
              answer="Reserve both Spin and Speed Burst entering the final 30 yards. Use a Pivot Cut immediately after the catch, commit to a single lane, and resist the temptation to dance between gaps. Patience and charge discipline are the keys."
            />
            <FaqItem
              question="Does the Mud Bowl require a different walkthrough?"
              answer="Yes. Mud reduces traction and widens your turning arc, so every cut and special move must start earlier. Speed Burst is safer than Spin on mud because linear momentum is more predictable than rotational recovery on a slippery surface."
            />
            <FaqItem
              question="Which special move is most useful in a Return Man 2 walkthrough?"
              answer="Speed Burst has the highest survival value because it directly removes you from pursuit range. Spin is more situational — essential for frontal tackles but less useful when the threat is behind you."
            />
            <FaqItem
              question="Can I complete a Return Man 2 walkthrough without special moves?"
              answer="Early stages are possible with pure movement, but mid-to-late levels are designed around special-move counters. Without them, the defensive AI will consistently close every lane before you can reach the end zone."
            />
          </div>
        </SeoSection>
      </div>
    </div>
  );
}
