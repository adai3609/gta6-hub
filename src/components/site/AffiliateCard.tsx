interface AffiliateCardProps {
  title: string;
  description: string;
  cta: string;
}

/**
 * Affiliate link placeholder. Once an affiliate program is approved, wire
 * the CTA to a tracked outbound link and add rel="sponsored" + target="_blank".
 */
export function AffiliateCard({ title, description, cta }: AffiliateCardProps) {
  return (
    <div className="card flex flex-col justify-between gap-4 border-dashed border-neon-amber/40 p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-neon-amber">
          Sponsored
        </p>
        <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-mist">{description}</p>
      </div>
      {/* Affiliate link goes here — add rel="sponsored" when wired up */}
      <span className="inline-flex w-fit cursor-not-allowed items-center rounded-lg bg-neon-amber/10 px-4 py-2 text-sm font-semibold text-neon-amber/60">
        {cta}
      </span>
    </div>
  );
}
