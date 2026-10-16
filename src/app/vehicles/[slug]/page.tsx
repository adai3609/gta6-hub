import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EntryDetail } from '@/components/db/EntryDetail';
import { vehicles } from '@/data/vehicles';
import { pageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return vehicles.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = vehicles.find((v) => v.slug === slug);
  if (!entry) {
    return pageMetadata({
      title: 'Vehicle Not Found — GTA 6 Hub',
      description: 'This vehicle page does not exist in the GTA 6 Hub database.',
      path: `/vehicles/${slug}`,
    });
  }
  return pageMetadata({
    title: `GTA 6 ${entry.name} — Vehicle Profile`,
    description: entry.summary.slice(0, 155),
    path: `/vehicles/${entry.slug}`,
  });
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = vehicles.find((v) => v.slug === slug);
  if (!entry) notFound();

  return (
    <EntryDetail
      entry={entry}
      sectionPath="vehicles"
      sectionLabel="Vehicles"
      related={[
        {
          href: '/locations',
          title: 'GTA 6 Locations Guide',
          description: 'The streets, coasts and skies where these vehicles appear.',
        },
        {
          href: '/100-checklist',
          title: '100% Completion Checklist',
          description: 'Plan the garage completionist grind before launch.',
        },
        {
          href: '/preorder',
          title: 'Pre-Order Guide',
          description: 'Editions and the Vintage Vice City Pack explained.',
        },
      ]}
    />
  );
}
