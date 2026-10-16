import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { breadcrumbJsonLd, JsonLd } from '@/components/seo/JsonLd';
import { RelatedLinks } from '@/components/content/RelatedLinks';
import { StatusBadge } from '@/components/db/StatusBadge';
import { siteConfig } from '@/lib/seo';
import type { BreadcrumbItem, DatabaseEntry, RelatedLink } from '@/types';

interface EntryDetailProps {
  entry: DatabaseEntry;
  sectionPath: string;
  sectionLabel: string;
  related: RelatedLink[];
}

export function EntryDetail({ entry, sectionPath, sectionLabel, related }: EntryDetailProps) {
  const crumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/' },
    { name: sectionLabel, href: `/${sectionPath}` },
    { name: entry.name, href: `/${sectionPath}/${entry.slug}` },
  ];

  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
      <JsonLd data={breadcrumbJsonLd(crumbs, siteConfig.url)} />
      <Breadcrumbs items={crumbs} />

      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          GTA 6 {entry.name}
        </h1>
        <StatusBadge status={entry.status} />
      </div>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neon-purple">
        {entry.category}
      </p>

      <p className="mt-6 max-w-3xl leading-relaxed text-mist">{entry.summary}</p>

      {entry.details && entry.details.length > 0 ? (
        <div className="mt-8 overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-left text-sm">
            <tbody>
              {entry.details.map((row) => (
                <tr key={row.label} className="border-b border-line/60 last:border-b-0">
                  <th scope="row" className="w-56 bg-surface px-5 py-3 font-semibold text-white">
                    {row.label}
                  </th>
                  <td className={`px-5 py-3 ${row.tbd ? 'text-mist/60 italic' : 'text-mist'}`}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      <div className="mt-8 card p-5">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neon-purple">
          Sources
        </h2>
        <ul className="mt-2 space-y-1 text-sm text-mist">
          {entry.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-mist/70">
          This page only contains information visible in official Rockstar material. Full
          stats and details land here on launch day — bookmark it and check back after
          November 19, 2026.
        </p>
      </div>

      <RelatedLinks links={related} />
    </div>
  );
}
