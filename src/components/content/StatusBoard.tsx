import type { StatusRow } from '@/types';

const statusStyles: Record<StatusRow['status'], { label: string; className: string }> = {
  no: { label: 'No', className: 'bg-neon-pink/15 text-neon-pink' },
  pending: { label: 'Pending', className: 'bg-neon-amber/15 text-neon-amber' },
  info: { label: 'Info', className: 'bg-neon-cyan/15 text-neon-cyan' },
  yes: { label: 'Yes', className: 'bg-emerald-400/15 text-emerald-400' },
};

export function StatusBoard({ rows }: { rows: StatusRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map((row) => {
            const badge = statusStyles[row.status];
            return (
              <tr key={row.label} className="border-b border-line/60 last:border-b-0">
                <th scope="row" className="w-1/2 bg-surface px-5 py-3 font-semibold text-white">
                  {row.label}
                </th>
                <td className="px-5 py-3 text-mist">
                  <span
                    className={`mr-2 inline-block rounded-md px-2 py-0.5 text-xs font-bold uppercase ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                  {row.value}
                  {row.note ? (
                    <span className="mt-1 block text-xs text-mist/70">{row.note}</span>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
