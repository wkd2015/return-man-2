# 分析脚本占位集成计划

> **writing-plans**：在无 GA4 / Clarity 密钥阶段完成依赖安装与条件加载，部署于 Vercel 后由环境变量启用；GSC 提交与 key 填入为后续运维步骤。

**Goal:** 集成 GA4（`@next/third-parties`）、Vercel Analytics（`@vercel/analytics`）、Microsoft Clarity（`next/script`），无密钥时不发起无效请求。

**Architecture:** 根 `app/layout.tsx` 中服务端条件渲染 `GoogleAnalytics`；客户端封装 `AnalyticsIntegrations` 挂载 Vercel Analytics + 条件 Clarity。

**Tech Stack:** Next.js 16、React 19。

---

### Task 1: 依赖

- [x] 安装 `@next/third-parties`、`@vercel/analytics`。

### Task 2: 组件与布局

- [x] 新增 `components/analytics-integrations.tsx`（`'use client'`）：`<Analytics />` + `NEXT_PUBLIC_CLARITY_PROJECT_ID` 时注入 Clarity。
- [x] 修改 `app/layout.tsx`：`NEXT_PUBLIC_GA_MEASUREMENT_ID` 存在时渲染 `<GoogleAnalytics gaId={...} />`；挂载 `<AnalyticsIntegrations />`。

### Task 3: 环境变量文档

- [x] 新增 `docs/deployment/analytics-env.md`（或等价）列出：
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`（GA4）
  - `NEXT_PUBLIC_CLARITY_PROJECT_ID`（Clarity）
  - 说明：Vercel Analytics 在 Vercel 托管时通常无需额外 public key；本地可静默。

### Task 4: 验证

- [x] `npm run build` 通过；无 env 时页面不报错。

**自检：** 未在仓库写入真实测量 ID；用户部署后于 Vercel / GSC 侧补全。
