import type { Metadata } from 'next';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { AdSlot } from '@/components/site/AdSlot';
import { missions, missionsNotice } from '@/data/missions';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 Missions Database — Spoiler-Safe Mission List',
  description:
    'The GTA 6 missions database: a spoiler-safe list of story and side missions. Rockstar has not revealed mission details — it goes live on launch day.',
  path: '/missions',
});

export default function MissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Database"
        title="GTA 6 Missions Database"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Missions', href: '/missions' },
        ]}
      >
        <p>{missionsNotice}</p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="card mt-10 flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
          <p className="text-4xl font-black uppercase tracking-tight text-white/20">Coming soon</p>
          <p className="max-w-md text-sm leading-relaxed text-mist">
            This section activates on launch day — November 19, 2026 — with a complete,
            spoiler-safe mission list. Story missions flagged separately from side content.
          </p>
        </div>

        <AdSlot variant="banner" className="mt-10" />
        <RelatedLinks
          links={[
            {
              href: '/100-checklist',
              title: '100% Completion Checklist',
              description: 'The mission track is one category of the full run.',
            },
            {
              href: '/locations',
              title: 'Locations Guide',
              description: 'Every named region of Leonida so far.',
            },
            {
              href: '/release-date',
              title: 'Release Date & Timeline',
              description: 'Counting down to November 19, 2026.',
            },
          ]}
        />
      </div>
    </>
  );
}
