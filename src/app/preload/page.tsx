import type { Metadata } from 'next';
import { FaqSection } from '@/components/seo/FaqSection';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { AdSlot } from '@/components/site/AdSlot';
import { preloadFaqs } from '@/data/faqs';
import { gameFacts } from '@/data/game';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 Preload Guide — Dates & Prep Checklist',
  description:
    'GTA 6 pre-loading begins November 12, 2026 for digital pre-orders. Step-by-step prep for PS5 and Xbox Series X|S so you are ready at launch.',
  path: '/preload',
});

export default function PreloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title="GTA 6 Preload Guide"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Preload Guide', href: '/preload' },
        ]}
      >
        <p>
          Pre-loading begins <strong className="text-white">{gameFacts.preloadDate}</strong> for
          digital pre-orders on PS5 and Xbox Series X|S — a full week before launch. Physical
          copies with a download code are also available from that date and support pre-loading
          too.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <article className="prose-gta max-w-3xl py-10">
          <h2>Prep checklist — do this now</h2>
          <ul>
            <li>
              <strong className="text-white">Free up storage.</strong> The official download size
              is not confirmed yet. Clearing 100&nbsp;GB+ is a safe precaution — final
              requirements appear on the store page closer to launch.
            </li>
            <li>
              <strong className="text-white">Pre-order digitally</strong> on the PlayStation
              Store or Microsoft Store if you want the earliest possible pre-load.
            </li>
            <li>
              <strong className="text-white">Check your internet plan</strong> — a launch-week
              download of this size can hit data caps. Pre-loading on November 12 spreads the
              cost over a quieter week.
            </li>
            <li>
              <strong className="text-white">Verify your account</strong> — pre-load appears on
              the account that holds the pre-order. Make sure you know the sign-in before launch
              week.
            </li>
          </ul>

          <h2>How to pre-load on PS5</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Sign in to the account with the GTA 6 pre-order.</li>
            <li>Open your game library and select Grand Theft Auto VI.</li>
            <li>
              From November 12, 2026, the download option unlocks — start it and let it run
              before launch day.
            </li>
          </ol>

          <h2>How to pre-load on Xbox Series X|S</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Sign in with the account holding the pre-order.</li>
            <li>Open My Games &amp; Apps → Full library.</li>
            <li>
              Find Grand Theft Auto VI under your games; from November 12, 2026 you can install
              it ahead of launch.
            </li>
          </ol>

          <h2>Physical copies</h2>
          <p>
            Physical editions include a download code and become available from November 12,
            2026 — the same day digital pre-loading opens. Enter the code, install, and you are
            set for launch. See the <a href="/preorder">pre-order guide</a> for retailer details.
          </p>
          <p>
            <em>
              Note: there is no PC version at launch, so there is nothing to pre-load on PC. The{' '}
              <a href="/pc-release">PC release tracker</a> follows any future announcement.
            </em>
          </p>
        </article>

        <AdSlot variant="in-article" className="mt-10" />
        <FaqSection items={preloadFaqs} />
        <RelatedLinks
          links={[
            {
              href: '/release-date',
              title: 'Release Date & Timeline',
              description: 'The full countdown to November 19, 2026.',
            },
            {
              href: '/preorder',
              title: 'Pre-Order Guide',
              description: 'Editions, prices and where to pre-order.',
            },
            {
              href: '/100-checklist',
              title: '100% Completion Checklist',
              description: 'Plan your completionist run while you wait.',
            },
          ]}
        />
      </div>
    </>
  );
}
