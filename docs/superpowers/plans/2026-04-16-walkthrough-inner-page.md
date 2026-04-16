# Walkthrough 内页实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 创建 `/guides/return-man-2-ultimate-walkthrough` 纯 SEO 攻略文章页，1000+ 词，关键词 "Return Man 2 walkthrough" 密度 ~3%，CTA 内链回首页。

**Architecture:** 提取首页 SeoSection/FaqItem 为共享组件 → 新建路由页 + 攻略正文组件 → 更新 sitemap。

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS, Lucide Icons, Shadcn Button

---

### Task 1: 提取 SeoSection 共享组件

**Files:**
- Create: `components/shared/SeoSection.tsx`
- Modify: `components/game/ReturnMan2SeoArticle.tsx`

- [ ] **Step 1: 创建 `components/shared/SeoSection.tsx`**

```tsx
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
```

- [ ] **Step 2: 修改 `ReturnMan2SeoArticle.tsx`——删除内联 SeoSection 定义，改为导入**

在文件顶部加 import：
```tsx
import { SeoSection } from "@/components/shared/SeoSection";
```

删除文件中第 15-48 行原有的 `function SeoSection(...)` 局部函数定义（整个函数体）。

- [ ] **Step 3: 运行构建验证**

Run: `npm run build`
Expected: 编译成功，无 TS 错误

- [ ] **Step 4: 提交**

```bash
git add components/shared/SeoSection.tsx components/game/ReturnMan2SeoArticle.tsx
git commit -m "refactor: 提取 SeoSection 为共享组件"
```

---

### Task 2: 提取 FaqItem 共享组件

**Files:**
- Create: `components/shared/FaqItem.tsx`
- Modify: `components/game/ReturnMan2SeoArticle.tsx`

- [ ] **Step 1: 创建 `components/shared/FaqItem.tsx`**

```tsx
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
```

- [ ] **Step 2: 修改 `ReturnMan2SeoArticle.tsx`——删除内联 FaqItem 定义，改为导入**

在文件顶部加 import：
```tsx
import { FaqItem } from "@/components/shared/FaqItem";
```

删除文件中第 50-65 行原有的 `function FaqItem(...)` 局部函数定义。

同时从 import 列表中移除不再直接使用的 `CircleHelp`（仅当 `ReturnMan2SeoArticle` 自身不再直接引用 `CircleHelp` 时；检查 FAQ section 的 `icon={CircleHelp}` 仍需要它，所以保留导入）。

- [ ] **Step 3: 运行构建验证**

Run: `npm run build`
Expected: 编译成功

- [ ] **Step 4: 提交**

```bash
git add components/shared/FaqItem.tsx components/game/ReturnMan2SeoArticle.tsx
git commit -m "refactor: 提取 FaqItem 为共享组件"
```

---

### Task 3: 创建 Walkthrough 页面路由（page.tsx）

**Files:**
- Create: `app/guides/return-man-2-ultimate-walkthrough/page.tsx`

- [ ] **Step 1: 创建目录与 page.tsx**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Gamepad2 } from "lucide-react";

import { WalkthroughArticle } from "@/components/guides/WalkthroughArticle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { getSiteUrl } from "@/lib/site";

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
              <Button size="lg" asChild>
                <Link href="/">
                  <Gamepad2 className="size-4" aria-hidden />
                  Play Return Man 2 Unblocked Now
                </Link>
              </Button>
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
              <Button size="lg" asChild>
                <Link href="/">
                  <Gamepad2 className="size-4" aria-hidden />
                  Start Return Man 2 Unblocked
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
```

- [ ] **Step 2: 运行 TypeScript 检查**

Run: `npx tsc --noEmit`
Expected: 可能报 `WalkthroughArticle` 尚未创建（预期的，Task 4 会创建）

---

### Task 4: 创建 WalkthroughArticle 组件

**Files:**
- Create: `components/guides/WalkthroughArticle.tsx`

- [ ] **Step 1: 创建 `components/guides/WalkthroughArticle.tsx`**

这是整篇攻略的正文组件，1000+ 词，包含 6 个 H2 区块。完整代码如下：

```tsx
import Link from "next/link";
import {
  BookOpen,
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
```

- [ ] **Step 2: 运行构建验证**

Run: `npm run build`
Expected: 编译成功，路由表新增 `/guides/return-man-2-ultimate-walkthrough`

- [ ] **Step 3: 提交**

```bash
git add app/guides/return-man-2-ultimate-walkthrough/page.tsx components/guides/WalkthroughArticle.tsx
git commit -m "feat: 新增 Return Man 2 Walkthrough 攻略内页

- 路径 /guides/return-man-2-ultimate-walkthrough
- 1000+ 词 SEO 正文，关键词 walkthrough/strategy 密度 ~3%
- 6 个 H2 区块：Controls / Special Moves / Pro Tactics / Mud Bowl / Hardest Levels / FAQ
- Header 与底部 CTA 内链回首页"
```

---

### Task 5: 更新 sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: 在 sitemap 的 return 数组中追加条目**

在现有 `{ url: base, ... }` 条目后面追加：

```ts
{
  url: `${base}/guides/return-man-2-ultimate-walkthrough`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
```

同时更新文件顶部注释，从 "单页英文站：仅收录根路径" 改为 "英文站：收录首页与攻略内页"。

- [ ] **Step 2: 运行构建验证**

Run: `npm run build`
Expected: 编译成功，sitemap.xml 包含两条 URL

- [ ] **Step 3: 提交**

```bash
git add app/sitemap.ts
git commit -m "seo: sitemap 新增 walkthrough 攻略页 URL"
```

---

### Task 6: 最终验证

- [ ] **Step 1: 完整构建**

Run: `npm run build`
Expected: 路由表包含 `/` 和 `/guides/return-man-2-ultimate-walkthrough`，无 TS/lint 错误

- [ ] **Step 2: 启动 dev 并人工验证**

Run: `npm run dev`
验证：
1. `http://localhost:3000/guides/return-man-2-ultimate-walkthrough` 可访问
2. H1 可见："Return Man 2 Walkthrough: The Ultimate Strategy Guide"
3. CTA 按钮链接到 `/`
4. 底部 CTA 链接到 `/`
5. 正文内链 "Play Return Man 2 online" 链接到 `/`
6. 查看源代码确认 JSON-LD、canonical、OG 正确

- [ ] **Step 3: 关键词密度快速校验**

在浏览器中查看页面源代码，搜索 "walkthrough"（不区分大小写）统计出现次数，对比总词数确认密度在 3% 附近。

---

## 文件变更汇总

| 操作 | 文件路径 |
|---|---|
| Create | `components/shared/SeoSection.tsx` |
| Create | `components/shared/FaqItem.tsx` |
| Create | `app/guides/return-man-2-ultimate-walkthrough/page.tsx` |
| Create | `components/guides/WalkthroughArticle.tsx` |
| Modify | `components/game/ReturnMan2SeoArticle.tsx`（删除内联定义，改为导入共享组件） |
| Modify | `app/sitemap.ts`（新增攻略页 URL） |
