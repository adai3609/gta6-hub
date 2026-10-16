import type { Metadata } from 'next';
import { EntryCard } from '@/components/db/EntryCard';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { AdSlot } from '@/components/site/AdSlot';
import { vehicles } from '@/data/vehicles';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 Vehicles Database — Every Vehicle So Far',
  description:
    'Every GTA 6 vehicle seen in official trailers: supercars, muscle cars, bikes, boats and aircraft. Stats unlock on launch day — tracked here.',
  path: '/vehicles',
});

export default function VehiclesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Database"
        title="GTA 6 Vehicles Database"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Vehicles', href: '/vehicles' },
        ]}
      >
        <p>
          Every vehicle type unambiguously visible in official GTA 6 trailer footage, tracked
          and clearly labeled. In-game names and stats are intentionally blank until launch —
          the full database goes live on November 19, 2026.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} section="vehicles" />
          ))}
        </div>

        <AdSlot variant="banner" />
        <RelatedLinks
          links={[
            {
              href: '/locations',
              title: 'Locations Guide',
              description: 'Where in Leonida these vehicles will roam.',
            },
            {
              href: '/100-checklist',
              title: '100% Completion Checklist',
              description: 'Garage completion starts with a plan.',
            },
            {
              href: '/weapons',
              title: 'Weapons Database',
              description: 'The confirmed arsenal, category by category.',
            },
          ]}
        />
      </div>
    </>
  );
}
