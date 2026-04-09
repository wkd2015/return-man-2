# 游戏站（SEO 出海）设计摘要

> 由脑暴流程收敛：需求已由产品方完整给出，本文档将约束抽象为可执行的架构与规范边界。

## 目标与成功标准

- 每个落地页在首屏（无需滚动）提供可点击的「Play」与 iframe 游戏主体，目标 **3 秒内** 到达可玩或明确加载态（Aha Moment）。
- 全站以 **iframe 嵌入 H5** 为主（Scratch / cocrea / itch.io / R2 托管 HTML 等），页面其余区块服务 SEO 与内链。
- **一页一词**：每页（含首页）只主攻一个关键词；域名段、TDK、H1 与该词强一致。
- 爬虫可见：核心文案以 **SSR/SSG HTML** 输出，禁止用纯 CSR 承载需要收录的正文。

## 方案对比（已选定）

| 方案 | 优点 | 缺点 |
|------|------|------|
| A. Next App Router + 子路径多语言 | SEO 权重集中、与 Vercel 契合 | 需规范目录与 metadata 生成 |
| B. 子域名多语言 | 运维隔离 | 分散权重，**与用户约束冲突，排除** |
| C. 纯静态 HTML 站 | 极轻 | 难维护规模化页面与 sitemap，**排除** |

**选定：A**，技术栈固定为 Next.js（App Router）、TypeScript、Tailwind CSS、Shadcn UI。

## 架构要点

- **路由**：多语言强制 `/{locale}/...`（如 `/en/`、`/ko/`），不用子域名、不用纯前端语言切换替代独立 URL。
- **静态资源**：游戏镜像、大图、视频等经 **assetPrefix** 指向 **Cloudflare R2**，降低 Vercel 出口带宽；具体 URL 由后续环境变量配置。
- **页面结构**（游戏详情类）：① 首屏 Game Container（iframe + 可选进度条 + 全屏/静音等）；② Related Games 网格；③ 底部 SEO 正文区（约 600–800 英文单词量级、含 How to play / FAQ / 评论组件等——具体文案语言随页面市场而定）。
- **Technical SEO**：单 H1 含核心词；标题 50–60 字符、描述 150–160 字符带 CTA；canonical、OG、Twitter；JSON-LD（SoftwareApplication 或 VideoGame）；全图 `alt`；标题层级不跳级；核心词密度目标 **3%–5%**（发布前人工/工具复核）。
- **运维**：Cloudflare Pages 场景保留 **`404.html`**，避免错误 URL 返回 200；新游戏页接入后 **sitemap 自动化** 并引导向 GSC/API 提交。
- **体验与合规**：广告位固定尺寸防 CLS；移动优先首屏游戏入口与触控尺寸；全局 Error Boundary；iframe/接口失败降级；评论/注册等敏感操作接 **Cloudflare Turnstile**。
- **流程**：Cursor 产出后必须 **复核多语言文案与 Meta**，禁止未审查即合并错误语言对的 TDK。

## 非目标（当前迭代）

- 不配置 GA4、Vercel、Clarity、具体 iframe URL、关键词表（由后续迭代填入）。
- 不实现完整游戏目录与评论后端（仅规范与脚手架）。

## 审批

本摘要已与用户提供的约束对齐，作为规则文件与初始化脚手架的依据。
