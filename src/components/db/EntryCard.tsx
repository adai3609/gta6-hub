import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { StatusBadge } from '@/components/db/StatusBadge';
import type { DatabaseEntry } from '@/types';

export function EntryCard({ entry, section }: { entry: DatabaseEntry; section: string }) {
  return (
    <Link
      href={`/${section}/${entry.slug}`}
      className="card card-hover group flex flex-col gap-2 p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-white group-hover:text-neon-cyan">{entry.name}</h3>
        <StatusBadge status={entry.status} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-neon-purple">
        {entry.category}
      </p>
      <p className="line-clamp-3 text-sm leading-relaxed text-mist">{entry.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-neon-cyan">
        Details
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </Link>
  );
}
