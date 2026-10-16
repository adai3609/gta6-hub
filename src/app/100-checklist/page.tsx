import type { Metadata } from 'next';
import { ChecklistTool } from '@/components/tools/ChecklistTool';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { AdSlot } from '@/components/site/AdSlot';
import { checklistCategories } from '@/data/checklist';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 100% Completion Checklist — Interactive Tracker',
  description:
    'Free interactive GTA 6 100% completion checklist. Track story, vehicles, properties, collectibles and misc objectives — progress saves in your browser.',
  path: '/100-checklist',
});

export default function ChecklistPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tool"
        title="GTA 6 100% Completion Checklist"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: '100% Checklist', href: '/100-checklist' },
        ]}
      >
        <p>
          Plan your completionist run before launch day. Categories follow the series&apos;
          long-running 100% structure; item lists finalize once Rockstar publishes the official
          completion requirements — your progress is saved locally in your browser, no account
          needed.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 pb-10 sm:px-6">
        <ChecklistTool categories={checklistCategories} />

        <AdSlot variant="banner" className="mt-10" />

        <RelatedLinks
          links={[
            {
              href: '/vehicles',
              title: 'Vehicles Database',
              description: 'Every vehicle seen in official trailers — your garage targets.',
            },
            {
              href: '/locations',
              title: 'Locations Guide',
              description: 'Every named region of Leonida to explore and check off.',
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
