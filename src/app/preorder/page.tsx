import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { FaqSection } from '@/components/seo/FaqSection';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { AdSlot } from '@/components/site/AdSlot';
import { AffiliateCard } from '@/components/site/AffiliateCard';
import { preorderFaqs } from '@/data/faqs';
import { retailers } from '@/data/retailers';
import { gameFacts } from '@/data/game';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 Pre-Order Guide — Editions, Prices & Bonus',
  description:
    'GTA 6 pre-orders: Standard $79.99 vs Ultimate $99.99, the Vintage Vice City Pack bonus, where to pre-order, and the November 20, 2026 cutoff.',
  path: '/preorder',
});

const editionRows = [
  { label: 'Price', standard: gameFacts.priceStandard, ultimate: gameFacts.priceUltimate },
  { label: 'Platforms', standard: 'PS5 · Xbox Series X|S', ultimate: 'PS5 · Xbox Series X|S' },
  { label: 'Release date', standard: gameFacts.releaseDate, ultimate: gameFacts.releaseDate },
  {
    label: 'Vintage Vice City Pack',
    standard: 'Included (before Nov 20, 2026)',
    ultimate: 'Included (before Nov 20, 2026)',
  },
  {
    label: 'Additional digital content',
    standard: 'Base game',
    ultimate: 'See official store listing for the full breakdown',
  },
] as const;

export default function PreorderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title="GTA 6 Pre-Order Guide"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Pre-Order Guide', href: '/preorder' },
        ]}
      >
        <p>
          Pre-orders opened <strong className="text-white">June 25, 2026</strong>. Every pre-order
          and purchase before <strong className="text-white">November 20, 2026</strong> includes
          the Vintage Vice City Pack. Here is what each edition costs and where to buy.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="max-w-4xl py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
            Standard vs Ultimate Edition
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-surface-raised text-white">
                  <th scope="col" className="px-5 py-3 font-semibold">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-5 py-3 font-bold">
                    Standard — {gameFacts.priceStandard}
                  </th>
                  <th scope="col" className="px-5 py-3 font-bold text-neon-pink">
                    Ultimate — {gameFacts.priceUltimate}
                  </th>
                </tr>
              </thead>
              <tbody>
                {editionRows.map((row) => (
                  <tr key={row.label} className="border-b border-line/60 last:border-b-0">
                    <th scope="row" className="px-5 py-3 font-semibold text-white">
                      {row.label}
                    </th>
                    <td className="px-5 py-3 text-mist">{row.standard}</td>
                    <td className="px-5 py-3 text-mist">{row.ultimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-mist/70">
            Prices are USD from the official June 2026 announcement. Regional pricing and the
            Ultimate Edition&apos;s full content list are defined on the official store pages.
          </p>
        </div>

        <article className="prose-gta max-w-3xl">
          <h2>The Vintage Vice City Pack</h2>
          <p>
            All GTA 6 pre-orders and purchases made before November 20, 2026 include the Vintage
            Vice City Pack — a collection of items themed on the original Vice City era. The
            official announcement describes it as items that &quot;flash back to when the neon
            burned brightest&quot;. Digital pre-orders also include one free month of GTA+.
          </p>
          <h2>Where to pre-order</h2>
        </article>

        <div className="mt-4 grid max-w-4xl gap-4 sm:grid-cols-2">
          {retailers.map((retailer) => (
            <div key={retailer.name} className="card p-5">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" aria-hidden />
                <h3 className="font-bold text-white">{retailer.name}</h3>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neon-purple">
                {retailer.type}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{retailer.note}</p>
            </div>
          ))}
        </div>

        <AffiliateCard
          title="Retailer & hardware deals"
          description="Affiliate placements for console and accessory deals go here once a partner program is approved."
          cta="Coming soon"
        />

        <AdSlot variant="in-article" className="mt-10" />
        <FaqSection items={preorderFaqs} />
        <RelatedLinks
          links={[
            {
              href: '/preload',
              title: 'Preload Guide',
              description: 'Pre-load starts November 12, 2026 — prep your console now.',
            },
            {
              href: '/release-date',
              title: 'Release Date & Timeline',
              description: 'Every official date from announcement to launch.',
            },
            {
              href: '/100-checklist',
              title: '100% Completion Checklist',
              description: 'Start planning your completionist run before launch day.',
            },
          ]}
        />
      </div>
    </>
  );
}
