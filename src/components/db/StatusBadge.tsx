import type { EntryStatus } from '@/types';

const styles: Record<EntryStatus, { label: string; className: string }> = {
  confirmed: { label: 'Confirmed', className: 'bg-emerald-400/15 text-emerald-400' },
  'trailer-seen': { label: 'Seen in trailer', className: 'bg-neon-cyan/15 text-neon-cyan' },
  tbd: { label: 'TBD', className: 'bg-neon-amber/15 text-neon-amber' },
};

export function StatusBadge({ status }: { status: EntryStatus }) {
  const style = styles[status];
  return (
    <span
      className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${style.className}`}
    >
      {style.label}
    </span>
  );
}
