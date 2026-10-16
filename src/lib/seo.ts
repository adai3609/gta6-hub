import type { Metadata } from 'next';

export const siteConfig = {
  name: 'GTA 6 Hub',
  shortName: 'GTA 6 Hub',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gta6hub.example',
  tagline: 'Release date, pre-order and tracker — the unofficial GTA 6 fan resource',
  description:
    'Unofficial GTA 6 hub: launch countdown, release-date timeline, PC release tracker, pre-order and edition comparison, preload guide, vehicle database and a 100% completion checklist.',
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
}

export function pageMetadata({ title, description, path }: PageMetaOptions): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}
