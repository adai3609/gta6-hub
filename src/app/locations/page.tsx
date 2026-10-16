import type { Metadata } from 'next';
import { EntryCard } from '@/components/db/EntryCard';
import { PageHeader } from '@/components/content/PageHeader';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { AdSlot } from '@/components/site/AdSlot';
import { locations } from '@/data/locations';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GTA 6 Locations — Vice City & State of Leonida',
  description:
    'Every named GTA 6 location so far: Vice City, Leonida Keys, Port Gellhorn, Mount Kalaga and more — from official announcements and trailers.',
  path: '/locations',
});

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Database"
        title="GTA 6 Locations Guide"
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Locations', href: '/locations' },
        ]}
      >
        <p>
          GTA 6 takes place in the state of Leonida — Rockstar&apos;s take on Florida — with Vice
          City at its heart. Every location below comes from official announcements or trailer
          captions; no fan-made map speculation.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} section="locations" />
          ))}
        </div>

        <AdSlot variant="banner" />
        <RelatedLinks
          links={[
            {
              href: '/vehicles',
              title: 'Vehicles Database',
              description: 'Cars, boats and aircraft seen across Leonida.',
            },
            {
              href: '/release-date',
              title: 'Release Date & Timeline',
              description: 'When you can explore Leonida for yourself.',
            },
            {
              href: '/missions',
              title: 'Missions Database',
              description: 'Spoiler-safe mission list, live on launch day.',
            },
          ]}
        />
      </div>
    </>
  );
}
