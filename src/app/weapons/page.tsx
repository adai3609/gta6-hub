import type { Metadata } from 'next';
import { EntryCard } from '@/components/db/EntryCard';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { AdSlot } from '@/components/site/AdSlot';
import { weapons } from '@/data/weapons';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 Weapons Database — Confirmed Arsenal So Far',
  description:
    'Weapon categories visible in official GTA 6 trailers, tracked and labeled. Full arsenal with stats and customization lands on launch day.',
  path: '/weapons',
});

export default function WeaponsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Database"
        title="GTA 6 Weapons Database"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Weapons', href: '/weapons' },
        ]}
      >
        <p>
          Only weapon <strong className="text-white">types</strong> unambiguously visible in
          official trailer footage are listed here. Models, stats and the customization system
          fill in when the game ships.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
          {weapons.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} section="weapons" />
          ))}
        </div>

        <AdSlot variant="banner" />
        <RelatedLinks
          links={[
            {
              href: '/vehicles',
              title: 'Vehicles Database',
              description: 'Every vehicle type seen in official trailers.',
            },
            {
              href: '/missions',
              title: 'Missions Database',
              description: 'Spoiler-safe mission list, live on launch day.',
            },
            {
              href: '/preorder',
              title: 'Pre-Order Guide',
              description: 'Lock in the Vintage Vice City Pack before the cutoff.',
            },
          ]}
        />
      </div>
    </>
  );
}
