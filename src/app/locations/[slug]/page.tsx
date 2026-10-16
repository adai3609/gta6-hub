import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EntryDetail } from '@/components/db/EntryDetail';
import { locations } from '@/data/locations';
import { pageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return locations.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = locations.find((l) => l.slug === slug);
  if (!entry) {
    return pageMetadata({
      title: 'Location Not Found — GTA 6 Hub',
      description: 'This location page does not exist in the GTA 6 Hub database.',
      path: `/locations/${slug}`,
    });
  }
  return pageMetadata({
    title: `GTA 6 ${entry.name} — Location Guide`,
    description: entry.summary.slice(0, 155),
    path: `/locations/${entry.slug}`,
  });
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = locations.find((l) => l.slug === slug);
  if (!entry) notFound();

  return (
    <EntryDetail
      entry={entry}
      sectionPath="locations"
      sectionLabel="Locations"
      related={[
        {
          href: '/vehicles',
          title: 'Vehicles Database',
          description: 'What you will be driving through this region.',
        },
        {
          href: '/missions',
          title: 'Missions Database',
          description: 'Spoiler-safe mission list, live on launch day.',
        },
        {
          href: '/100-checklist',
          title: '100% Completion Checklist',
          description: 'Track every landmark you discover.',
        },
      ]}
    />
  );
}
