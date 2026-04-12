type AdSlotVariant = "leaderboard" | "medium-rectangle";

const VARIANTS: Record<
  AdSlotVariant,
  { width: number; height: number; label: string; className: string }
> = {
  leaderboard: {
    width: 728,
    height: 90,
    label: "728×90",
    className: "h-[90px] w-full max-w-[728px]",
  },
  "medium-rectangle": {
    width: 300,
    height: 250,
    label: "300×250",
    className: "h-[250px] w-[300px] max-w-full",
  },
};

type AdSlotProps = {
  variant: AdSlotVariant;
  /** 给广告脚本或运营识别的位置 id */
  slotId: string;
  className?: string;
};

/**
 * 固定尺寸占位，降低 CLS；不加载第三方脚本，仅预留槽位。
 */
export function AdSlot({ variant, slotId, className }: AdSlotProps) {
  const v = VARIANTS[variant];

  return (
    <aside
      className={`mx-auto flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed border-muted-foreground/30 bg-muted/40 text-muted-foreground dark:border-white/15 dark:bg-zinc-900/50 ${v.className} ${className ?? ""}`}
      aria-label={`广告位 ${v.label}`}
      data-ad-slot={slotId}
    >
      <span className="px-2 text-center text-xs leading-snug">
        Ad slot · {v.label}
        <span className="sr-only"> ({slotId})</span>
      </span>
    </aside>
  );
}
