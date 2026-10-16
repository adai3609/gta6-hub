import type { Metadata } from 'next';
import { FaqSection } from '@/components/seo/FaqSection';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { Timeline } from '@/components/content/Timeline';
import { AdSlot } from '@/components/site/AdSlot';
import { launchTimeline } from '@/data/game';
import { releaseDateFaqs } from '@/data/faqs';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 Release Date — Full Timeline & FAQ',
  description:
    'GTA 6 releases November 19, 2026 on PS5 and Xbox Series X|S. Full official timeline: announcement, delays, pre-orders, preload and launch day.',
  path: '/release-date',
});

export default function ReleaseDatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title="GTA 6 Release Date"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Release Date', href: '/release-date' },
        ]}
      >
        <p>
          Grand Theft Auto VI launches on <strong className="text-white">November 19, 2026</strong>{' '}
          for PlayStation 5 and Xbox Series X|S. Here is the complete official timeline —
          every confirmed date from the first announcement to launch day.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <article className="prose-gta max-w-3xl py-10">
          <h2>The road to November 19, 2026</h2>
          <p>
            GTA 6&apos;s road to launch has been long. Rockstar Games officially announced the
            game in December 2023, and the release window shifted twice before settling on the
            current date. Every event below comes from official Rockstar announcements — no
            rumors, no leaks.
          </p>
        </article>

        <div className="max-w-3xl">
          <Timeline events={launchTimeline} />
        </div>

        <article className="prose-gta max-w-3xl pt-10">
          <h2>What happens between now and launch</h2>
          <ul>
            <li>
              <strong className="text-white">November 12, 2026</strong> — digital pre-orders can
              pre-load the game; physical copies with download codes arrive at retailers. See
              the <a href="/preload">preload guide</a>.
            </li>
            <li>
              <strong className="text-white">November 19, 2026</strong> — launch day on PS5 and
              Xbox Series X|S. No PC version ships at launch; watch the{' '}
              <a href="/pc-release">PC release tracker</a>.
            </li>
            <li>
              <strong className="text-white">November 20, 2026</strong> — final day for the
              Vintage Vice City Pack pre-order bonus. Details in the{' '}
              <a href="/preorder">pre-order guide</a>.
            </li>
          </ul>
          <p>
            Launch databases — vehicles, missions, locations and weapons — go live on this site
            the day the game ships, starting with the{' '}
            <a href="/vehicles">vehicle database</a> seeded from official trailer appearances.
          </p>
        </article>

        <AdSlot variant="in-article" className="mt-10" />
        <FaqSection items={releaseDateFaqs} />
        <RelatedLinks
          links={[
            {
              href: '/pc-release',
              title: 'PC Release Tracker',
              description:
                'No PC at launch — compare Rockstar’s historical patterns and what signals to watch.',
            },
            {
              href: '/preload',
              title: 'Preload Guide',
              description: 'Pre-load starts November 12. Get your console ready step by step.',
            },
            {
              href: '/preorder',
              title: 'Pre-Order Guide',
              description: 'Editions, pricing and the Vintage Vice City Pack explained.',
            },
          ]}
        />
      </div>
    </>
  );
}
