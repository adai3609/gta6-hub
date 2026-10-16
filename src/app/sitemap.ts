import Link from 'next/link';
import type { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { vehicles } from '@/data/vehicles';
import { weapons } from '@/data/weapons';
import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/release-date',
    '/pc-release',
    '/preorder',
    '/preload',
    '/100-checklist',
    '/vehicles',
    '/missions',
    '/locations',
    '/weapons',
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));

  const dbEntries = [
    ...vehicles.map((entry) => ({ section: 'vehicles', slug: entry.slug })),
    ...locations.map((entry) => ({ section: 'locations', slug: entry.slug })),
    ...weapons.map((entry) => ({ section: 'weapons', slug: entry.slug })),
  ];

  for (const { section, slug } of dbEntries) {
    entries.push({
      url: absoluteUrl(`/${section}/${slug}`),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    });
  }

  return entries;
}
