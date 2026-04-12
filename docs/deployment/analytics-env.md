# 分析工具环境变量（占位）

部署到 Vercel 并在 GSC 提交站点后，在对应平台创建资源并填入以下变量（Vercel Project → Settings → Environment Variables）。

| 变量 | 用途 | 示例格式 |
|------|------|----------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity | 项目 ID 字符串 |

## Vercel Analytics

- 使用包 `@vercel/analytics`，组件已在 `components/analytics-integrations.tsx` 中挂载。
- 部署在 Vercel 上时一般会收集 Web Vitals；无需在 env 中配置公开 key。若使用 Speed Insights 等扩展，可后续再单独加包。

## 未配置时的行为

- 未设置 `NEXT_PUBLIC_GA_MEASUREMENT_ID`：不加载 GA4 脚本。
- 未设置 `NEXT_PUBLIC_CLARITY_PROJECT_ID`：不加载 Clarity。
- Vercel Analytics 在本地构建/非 Vercel 环境通常无上报，不影响构建。
