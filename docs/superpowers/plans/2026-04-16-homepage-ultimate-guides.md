# 首页 Ultimate Game Guides 模块实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在首页游戏区下方、`Related Games` 之前插入「Ultimate Game Guides」Card 区块，站内 `<a>` 链至 `/guides/return-man-2-ultimate-walkthrough`，锚文本含「Return Man 2 Ultimate Walkthrough」，全 RSC/SSR。

**Architecture:** 独立 Server Component `UltimateGameGuides.tsx` 持有卡片数据数组；`app/page.tsx` 插入一节 `section` 并渲染该组件。

**Tech Stack:** Next.js 16 App Router, `next/link`, Tailwind CSS, Lucide（与 RelatedGames 风格对齐）

---

### Task 1: 新建 UltimateGameGuides 组件

**Files:**
- Create: `components/game/UltimateGameGuides.tsx`

- [ ] **Step 1: 创建文件（完整内容如下）**

```tsx
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
```

说明：`Link` 在 Server Component 中预渲染为 `<a href="...">`，满足爬虫抓取；整块卡片为单一链接，避免重复锚点。

- [ ] **Step 2: 运行 TypeScript 检查（可选）**

Run: `npx tsc --noEmit`
Expected: 无错误（在 Task 2 合并后亦可只做 `npm run build`）

---

### Task 2: 在首页插入模块

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: 增加 import**

```tsx
import { UltimateGameGuides } from "@/components/game/UltimateGameGuides";
```

- [ ] **Step 2: 在「Play」`section` 闭合标签之后、`Related Games` `section` 之前插入**

```tsx
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
            In-depth Return Man 2 walkthrough and strategy guides — same site,
            no install. Start with the ultimate guide below.
          </p>
          <UltimateGameGuides />
        </section>
```

- [ ] **Step 3: 构建验证**

Run: `npm run build`
Expected: 成功；路由表仍为 `/` 与 `/guides/...` 等，无新增路由。

- [ ] **Step 4: 人工验证（本地 `npm run dev`）**

1. 打开 `http://localhost:3000/`，滚动到游戏 iframe 下方，确认出现 **Ultimate Game Guides**。
2. 浏览器「查看网页源代码」，搜索 `return-man-2-ultimate-walkthrough`，确认存在 `<a href="/guides/return-man-2-ultimate-walkthrough">` 且可见文本含 **Return Man 2 Ultimate Walkthrough**。

---

## 计划自检（对照 spec）

| Spec 要求 | 对应 Task |
|-----------|-----------|
| 游戏区下、Related 前 | Task 2 插入位置 |
| Card + Tailwind | Task 1 class 对齐 RelatedGames |
| 锚文本含核心关键词 | Task 1 `anchorText` |
| 短描述 + 语义密度 | Task 1 `description` + Task 2 模块 intro |
| 标准 `<a>`、SSR | Task 1 使用 RSC + `Link`，无 `"use client"` |
| 诚实表述 Stage 15 | Task 1 description 已用 “Stage 15 focus” 而非「逐步 15 关」 |

---

## 执行方式

计划保存路径：`docs/superpowers/plans/2026-04-16-homepage-ultimate-guides.md`

**1. Subagent-Driven（推荐）** — 每 Task 独立 subagent + spec/quality 双审  
**2. Inline Execution** — 本会话按 Task 顺序直接改代码

由实现者任选其一；完成后按仓库规范使用**中文** `git commit`（本迭代用户要求暂不提交时可跳过 Step 4 中的提交）。
