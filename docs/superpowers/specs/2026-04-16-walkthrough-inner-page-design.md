# Return Man 2 Walkthrough 内页设计规格

> 纯 SEO 攻略文章页，无游戏 iframe，通过 CTA 内链引流回首页。

## 目标关键词

| 词组 | 角色 | 密度目标 |
|---|---|---|
| Return Man 2 walkthrough | 主词 | ~3% |
| Return Man 2 strategy | 副词 | 自然出现 4-6 次 |
| Return Man 2 unblocked | 品牌锚文本 | 内链文本使用 |

## 路由与 URL

- 路径：`/guides/return-man-2-ultimate-walkthrough`
- Canonical：`{siteUrl}/guides/return-man-2-ultimate-walkthrough`
- 纯英文，无 locale 前缀

## TDK

- **Title**（55 字符）：`Return Man 2 Walkthrough — Ultimate Strategy Guide`
- **Description**（~155 字符）：`Complete Return Man 2 walkthrough with controls mastery, special moves, Mud Bowl tactics, and pro tips from the community. Master every stage now.`
- **H1**：`Return Man 2 Walkthrough: The Ultimate Strategy Guide`

## 文件结构

```
app/guides/return-man-2-ultimate-walkthrough/
  page.tsx                          # metadata + JSON-LD + 页面骨架

components/guides/
  WalkthroughArticle.tsx            # 攻略正文（1000+ 词）

components/shared/
  SeoSection.tsx                    # 从 ReturnMan2SeoArticle 提取
  FaqItem.tsx                       # 从 ReturnMan2SeoArticle 提取
```

首页 `ReturnMan2SeoArticle.tsx` 同步改为导入 `components/shared/SeoSection` 和 `components/shared/FaqItem`。

## 页面骨架（page.tsx）

- Header 区域：H1 + 副标题 + **CTA 按钮**（"Play Return Man 2 Online" → `/`）
- 主内容区：`<WalkthroughArticle />`
- Footer CTA：底部再次放置回首页的内链块

### JSON-LD

类型 `Article`，`about` 引用首页 `VideoGame`：

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Return Man 2 Walkthrough: The Ultimate Strategy Guide",
  "description": "...",
  "url": "{siteUrl}/guides/return-man-2-ultimate-walkthrough",
  "about": {
    "@type": "VideoGame",
    "@id": "{siteUrl}/#game"
  }
}
```

## 内容结构

### H2: Controls Mastery: Your Keyboard Is the Playbook (~200 词)

- H3: Movement Layout — IJKL vs Arrow Keys
  - 方向映射详解：Up/I = forward, Down/K = back/slow, Left/J = left, Right/L = right
  - 笔记本 vs 台式键盘的手感差异
- H3: Sprint and Dodge — One Input, Two Jobs
  - 上方向键兼具冲刺功能；左右配合时机可闪避
  - 强调"你的手指在同时做转向与爆发决策"

### H2: Special Moves Decoded: Spin, Speed Burst, and Front Flip (~200 词)

- H3: Spin (A) — Direct Tackle Escape
  - 最佳时机：正面或侧面被贴身；快速方向变换
- H3: Speed Burst (S) — Break Through Open Lanes
  - 最佳时机：有缺口时加速摆脱追兵
- H3: Front Flip (D) — Clear Low Tackles
  - 最佳时机：对手俯冲或低扑时跳过
- H3: Charge Management — When NOT to Use a Special
  - 充能条有限，浪费在无威胁时刻 = 高难关卡无技能可用

### H2: Pro Tactics: The Community Playbook (~200 词)

基于 Reddit 原始战术，整理为 4 条操作建议：

1. **Pivot 切割**：开局向短侧切 2-3 步 → 反向转身 → 立即冲刺
2. **拉扯防守者**：慢速向一侧移动吸引防守阵型偏移 → 空侧爆发
3. **慎用 Turbo**：当防守者在正前方时禁止冲刺，否则撞入人墙
4. **择侧接球**：选择左侧 punt return → 跨栏 → 慢跑右侧拉人 → 左侧爆发

### H2: Mastering Field Conditions: The Mud Bowl Survival Guide (~200 词)

- H3: How Mud Changes Movement
  - 泥地影响移动速度和方向控制，打滑特性要求提前预判
- H3: Adapting Your Strategy to Slippery Terrain
  - 避免急转弯，提前规划路线，特殊技能释放时机因惯性而变化
- H3: Stage Unlocks in Mud Bowl
  - 递进难度，每关带来新障碍物和防守配置

### H2: The Road to Victory: Breaking Down the Hardest Levels (~200 词)

- H3: Stage 15 — The Ultimate Challenge
  - 全游戏最难关卡；多名精英防守者、更快覆盖、更少容错
  - YouTube 视频证实该关难度；建议：保留 Spin+Speed Burst 双保险
- H3: General Hard-Level Strategy
  - 防守 AI 更激进、覆盖更紧；路线选择与时机重要性 > 速度
  - 逐关重玩修正单一弱点，而非全盘改操作

### H2: Return Man 2 Walkthrough FAQ (~150 词)

5-6 条 FaqItem：

1. "What is the best strategy for Return Man 2 walkthrough?" — 综合操作精通 + 特殊技能时机
2. "How do I beat Stage 15 in Return Man 2?" — 保留双技能、拉扯防守、不贪冲刺
3. "Does the Mud Bowl require a different walkthrough?" — 是，泥地改变移动逻辑
4. "Which special move is most useful in a Return Man 2 walkthrough?" — Speed Burst（救命价值最高）
5. "Can I complete a Return Man 2 walkthrough without special moves?" — 早期可以，后期极难

## 内链规划

| 位置 | 锚文本 | 目标 |
|---|---|---|
| Header CTA 按钮 | Play Return Man 2 Unblocked Now | `/` |
| Controls 段落正文 | play Return Man 2 online | `/` |
| 底部 CTA 块 | Ready to play? Start Return Man 2 Unblocked | `/` |

## sitemap 更新

`app/sitemap.ts` 新增条目：

```ts
{ url: `${base}/guides/return-man-2-ultimate-walkthrough`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }
```

## 共享组件重构

从 `components/game/ReturnMan2SeoArticle.tsx` 提取：

- `SeoSection` → `components/shared/SeoSection.tsx`
- `FaqItem` → `components/shared/FaqItem.tsx`

首页 `ReturnMan2SeoArticle.tsx` 改为从 shared 导入。内页 `WalkthroughArticle.tsx` 同样导入。

## 非目标

- 不在此页嵌入游戏 iframe
- 不增加评论系统
- 不实现 MDX
