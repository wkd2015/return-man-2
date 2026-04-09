# 游戏站规则与脚手架实施计划

> **For agentic workers:** 可使用 `executing-plans` / `subagent-driven-development` 按任务继续扩展；本计划对应「初始化」阶段。

**Goal:** 将 SEO 游戏站约束固化为 Cursor 规则，并完成 Next.js + TS + Tailwind + Shadcn 的工程初始化（不含第三方密钥与具体游戏数据）。

**Architecture:** 多文件 `.cursor/rules/*.mdc` 按主题拆分；`public/404.html` 服务 Cloudflare Pages；`next.config` 预留 `assetPrefix`/R2 说明。

**Tech Stack:** Next.js 16 App Router、TypeScript、Tailwind v4、Shadcn UI。

---

### Task 1: 规格文档

**Files:**
- Create: `docs/superpowers/specs/2026-04-09-game-portal-seo-design.md`

- [x] 写入设计摘要（哲学、路由、SEO、性能、安全边界）。

### Task 2: Cursor 规则

**Files:**
- Create: `.cursor/rules/game-portal-philosophy.mdc`
- Create: `.cursor/rules/game-portal-stack-and-naming.mdc`
- Create: `.cursor/rules/game-portal-page-layout.mdc`
- Create: `.cursor/rules/game-portal-seo-technical.mdc`
- Create: `.cursor/rules/game-portal-performance-and-ops.mdc`
- Create: `.cursor/rules/game-portal-quality-and-security.mdc`
- Create: `.cursor/rules/git-commit-chinese.mdc`

- [x] 每条规则含 frontmatter（`description`、`alwaysApply` 或 `globs`），内容可核查、可执行。

### Task 3: 工程与部署占位

**Files:**
- Create: `public/404.html`
- Modify: `next.config.ts`（`assetPrefix` 注释与类型安全的占位说明）

- [x] `404.html` 为独立静态页，供 Cloudflare Pages 等非 Next 路由层使用。
- [x] 不在仓库中写入 GA4 / iframe / 关键词密钥。

### Task 4: 验证与 Git

- [x] 运行 `npm run build`，预期构建成功。
- [x] `git add` 新增与修改文件，`git commit` 使用**中文**说明（见 `git-commit-chinese.mdc`）。

**自检：** 规则覆盖用户 6 大类约束；初始化未引入无关密钥文件。
