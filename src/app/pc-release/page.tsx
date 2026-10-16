import type { Metadata } from 'next';
import { FaqSection } from '@/components/seo/FaqSection';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { StatusBoard } from '@/components/content/StatusBoard';
import { AdSlot } from '@/components/site/AdSlot';
import { pcReleaseFaqs } from '@/data/faqs';
import { pageMetadata } from '@/lib/seo';
import type { StatusRow } from '@/types';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 PC Release Date — Tracker & Analysis',
  description:
    'Is GTA 6 coming to PC? No PC version is announced. Track the status, compare Rockstar’s GTA 5 and RDR2 PC delay patterns, and see what to watch.',
  path: '/pc-release',
});

const trackerRows: StatusRow[] = [
  {
    label: 'PC version at launch',
    status: 'no',
    value: 'Not included — launch is PS5 and Xbox Series X|S only',
  },
  {
    label: 'PC version announced',
    status: 'pending',
    value: 'No announcement from Rockstar Games',
  },
  {
    label: 'GTA 5: console → PC',
    status: 'info',
    value: '≈19 months (Sep 2013 → Apr 14, 2015)',
    note: 'Historical reference, not a prediction for GTA 6',
  },
  {
    label: 'Red Dead Redemption 2: console → PC',
    status: 'info',
    value: '≈13 months (Oct 2018 → Nov 2019)',
    note: 'Historical reference, not a prediction for GTA 6',
  },
  {
    label: 'Pre-orders for PC',
    status: 'no',
    value: 'Not available — console pre-orders only',
  },
];

export default function PcReleasePage() {
  return (
    <>
      <PageHeader
        eyebrow="Tracker"
        title="GTA 6 PC Release Date"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'PC Release Tracker', href: '/pc-release' },
        ]}
      >
        <p>
          Short answer: <strong className="text-white">there is no GTA 6 PC version yet</strong>.
          The game launches November 19, 2026 on PS5 and Xbox Series X|S only, and Rockstar has
          not announced a PC release. This tracker collects what is officially known and the
          historical pattern — no rumors, no fake dates.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="max-w-3xl py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">Status board</h2>
          <StatusBoard rows={trackerRows} />
        </div>

        <article className="prose-gta max-w-3xl">
          <h2>Why history suggests PC will come — eventually</h2>
          <p>
            Rockstar has a consistent pattern: its biggest titles launch on consoles first and
            arrive on PC later. GTA 5 took about 19 months to reach PC after its September 2013
            console launch. Red Dead Redemption 2 took about 13 months. Grand Theft Auto IV took
            roughly seven months. Rockstar has not promised a PC version of GTA 6 — but every
            major Rockstar release of the modern era has eventually reached PC.
          </p>
          <h3>What to watch for signals</h3>
          <ul>
            <li>Official posts on the Rockstar Newswire — the only source that counts</li>
            <li>Take-Two Interactive earnings calls, where PC plans are sometimes discussed</li>
            <li>A Steam or Epic Games Store listing appearing for Grand Theft Auto VI</li>
            <li>Rockstar careers postings referencing PC platform work</li>
          </ul>
          <p>
            <em>
              Any specific PC release date you see online today is speculation. If Rockstar
              announces one, this page updates the same day. We do not publish rumor-based
              dates.
            </em>
          </p>
          <h2>What you can play on in the meantime</h2>
          <p>
            If you only have a PC, launch day requires a PS5 or Xbox Series X|S. Pre-orders are
            console-only right now — see the <a href="/preorder">pre-order guide</a> for edition
            details, and the <a href="/preload">preload guide</a> to be ready for November 12.
          </p>
        </article>

        <AdSlot variant="in-article" className="mt-10" />
        <FaqSection items={pcReleaseFaqs} />
        <RelatedLinks
          links={[
            {
              href: '/release-date',
              title: 'Release Date & Timeline',
              description: 'The full official timeline to November 19, 2026.',
            },
            {
              href: '/preorder',
              title: 'Pre-Order Guide',
              description: 'Standard vs Ultimate editions and the pre-order bonus.',
            },
            {
              href: '/vehicles',
              title: 'Vehicles Database',
              description: 'Every vehicle seen in official GTA 6 trailers so far.',
            },
          ]}
        />
      </div>
    </>
  );
}
