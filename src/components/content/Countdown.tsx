'use client';

import { useEffect, useState } from 'react';
import { gameFacts } from '@/data/game';

const TARGET_MS = new Date(gameFacts.releaseDateIso).getTime();

function getParts(nowMs: number) {
  const diff = Math.max(0, TARGET_MS - nowMs);
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  return { days, hours, minutes, seconds, launched: diff === 0 };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="card min-w-20 px-4 py-3 text-center shadow-glow-cyan sm:min-w-24">
      <div className="text-3xl font-black tabular-nums text-white sm:text-4xl">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-mist">
        {label}
      </div>
    </div>
  );
}

export function Countdown() {
  // Hydration-safe: only tick after mount; SSR renders placeholder dashes.
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    setNowMs(Date.now());
    const id = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (nowMs === null) {
    return (
      <div className="flex flex-wrap gap-3" aria-hidden>
        {['--', '--', '--', '--'].map((dash) => (
          <div key={dash} className="card min-w-20 px-4 py-3 text-center sm:min-w-24">
            <span className="text-3xl font-black text-white/30 sm:text-4xl">{dash}</span>
          </div>
        ))}
      </div>
    );
  }

  const { days, hours, minutes, seconds, launched } = getParts(nowMs);

  if (launched) {
    return (
      <p className="text-2xl font-black uppercase tracking-wide text-sunset">
        GTA 6 is out now
      </p>
    );
  }

  return (
    <div
      className="flex flex-wrap gap-3"
      role="timer"
      aria-label="Countdown to GTA 6 launch"
    >
      <Unit value={days} label="Days" />
      <Unit value={hours} label="Hours" />
      <Unit value={minutes} label="Minutes" />
      <Unit value={seconds} label="Seconds" />
    </div>
  );
}
