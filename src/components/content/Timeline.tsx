import type { TimelineEvent } from '@/types';

const kindStyles: Record<TimelineEvent['kind'], string> = {
  past: 'border-line bg-surface',
  milestone: 'border-neon-pink/60 bg-surface shadow-glow-pink',
  future: 'border-dashed border-line bg-surface/40',
};

const dotStyles: Record<TimelineEvent['kind'], string> = {
  past: 'bg-neon-purple/60',
  milestone: 'bg-neon-pink shadow-glow-pink',
  future: 'border-2 border-neon-cyan bg-ink',
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <ol className="relative space-y-6 border-l border-line pl-6">
      {events.map((event) => (
        <li key={`${event.date}-${event.label}`} className="relative">
          <span
            aria-hidden
            className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ${dotStyles[event.kind]}`}
          />
          <div className={`rounded-xl border p-5 ${kindStyles[event.kind]}`}>
            <div className="flex flex-wrap items-center gap-2">
              <time className="text-sm font-bold text-neon-cyan">{event.date}</time>
              <span className="text-sm font-semibold text-white">{event.label}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-mist">{event.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
