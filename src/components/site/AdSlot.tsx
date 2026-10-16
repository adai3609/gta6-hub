interface AdSlotProps {
  variant?: 'banner' | 'in-article' | 'sidebar';
  className?: string;
}

const variantStyles: Record<NonNullable<AdSlotProps['variant']>, string> = {
  banner: 'h-28 md:h-32',
  'in-article': 'h-32',
  sidebar: 'h-96',
};

/**
 * AdSense placeholder. After AdSense approval, replace the inner markup with
 * the real unit code (ins.ad + push script) and keep the outer styling.
 */
export function AdSlot({ variant = 'banner', className = '' }: AdSlotProps) {
  return (
    <aside
      aria-hidden
      className={`card flex flex-col items-center justify-center border-dashed bg-surface/50 text-center ${variantStyles[variant]} ${className}`}
    >
      {/* AdSense slot — replace with unit code after approval */}
      <span className="text-xs font-semibold uppercase tracking-widest text-mist/70">
        Advertisement
      </span>
      <span className="mt-1 text-[10px] text-mist/40">
        AdSense slot — replace with unit code after approval
      </span>
    </aside>
  );
}
