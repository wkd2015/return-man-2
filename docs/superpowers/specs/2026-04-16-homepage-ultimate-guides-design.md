# 首页「Ultimate Game Guides」模块设计规格

> 在游戏主体（`GameContainer`）下方增加站内攻略入口，强化内链与关键词语义，全量 SSR。

## 目标

- **位置**：紧接「Play + GameContainer」所在 `section` 之后、**「Related Games」之前**（与游戏强相关、先于外链推荐）。
- **视觉**：Tailwind Card 风格，与 `RelatedGames` 卡片（圆角边框、`bg-card`、hover 抬升）一致，避免割裂。
- **SEO**：锚文本含 **「Return Man 2 Ultimate Walkthrough」**（或等价完整短语）；卡片副文案自然包含 *walkthrough / stages / strategy* 等语义词。
- **爬虫**：使用 **Next.js `Link`**（RSC 默认无 `"use client"`）→ 输出标准 `<a href="...">`，由服务端 HTML 直出，无客户端-only 导航。

## 方案对比

| 方案 | 做法 | 优点 | 缺点 |
|------|------|------|------|
| **A（推荐）** | 新建 `components/game/UltimateGameGuides.tsx`，在 `app/page.tsx` 插入一节 | 职责清晰、易扩展为多篇攻略 | 多一个文件 |
| B | 全文写在 `app/page.tsx` | 少文件 | 首页臃肿、难维护 |
| C | 并入 `RelatedGames` 数据源 | 少 import | 语义混杂（外链 vs 站内攻略） |

**选定：A**。

## 信息架构

```
<section aria-labelledby="guides-heading">
  <h2 id="guides-heading">Ultimate Game Guides</h2>
  <p>一句模块副文案（可选，含 walkthrough 语义）</p>
  <ul className="grid ...">
    <li>
      <Link href="/guides/return-man-2-ultimate-walkthrough" className="...card...">
        <span>图标</span>
        <span className="font-semibold">Return Man 2 Ultimate Walkthrough</span>  <!-- 锚文本 = 可见标题 -->
        <p>短描述：Master all 15 stages…（可微调为诚实表述，见下文）</p>
        <span>Read guide →</span>  <!-- 装饰文案，非第二链接 -->
      </Link>
    </li>
  </ul>
</section>
```

### 关于「15 stages」文案诚实度

攻略页正文已说明无逐关权威文本；首页卡片描述应避免**虚假承诺**。建议副文案改为能力导向，例如：

- *“Controls, Mud Bowl, Stage 15 focus, and community tactics in one deep guide.”*

仍保留 *walkthrough / stages* 等词根以满足语义密度，但不声称「已覆盖全部 15 关逐步攻略」。

## 单卡 vs 多卡

当前仅存在一条站内攻略 URL。采用 **单入口卡片 + 常量数组**（`GUIDE_CARDS` 长度 1），便于后续追加第二篇指南时只扩数据、不改布局。

## 可访问性

- 模块 `h2`：`Ultimate Game Guides`。
- 卡片内主链接为整块可点区域（与 `RelatedGames` 一致）；**站内链接**不使用 `target="_blank"`。
- 图标 `aria-hidden`；若仅有装饰性「Read guide」文字，可放在链接内或 `aria-hidden` 的装饰行，避免重复链接。

## 非目标

- 不修改攻略页 URL 与正文。
- 不引入 `use client`。
- 不改首页 TDK（除非产品后续要求把 guides 写入 meta keywords，本迭代不做）。

## 验收标准

1. 首页源码中，在 `GameContainer` 对应区域之后可见新 `section` 与 `<a href="/guides/return-man-2-ultimate-walkthrough">`。
2. 锚文本可见字符串包含 **Return Man 2 Ultimate Walkthrough**。
3. `npm run build` 通过，无新 lint 问题。
