'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Circle, RotateCcw } from 'lucide-react';
import type { ChecklistCategory } from '@/types';

const STORAGE_KEY = 'gta6hub-checklist-v1';

function parseStored(raw: string): Record<string, boolean> | null {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const result: Record<string, boolean> = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === 'boolean') result[key] = value;
    }
    return result;
  } catch {
    // Corrupt JSON — drop it and start fresh rather than crashing the tool.
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function ChecklistTool({ categories }: { categories: ChecklistCategory[] }) {
  const [checked, setChecked] = useState<Record<string, boolean> | null>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    setChecked(raw !== null ? (parseStored(raw) ?? {}) : {});
  }, []);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = { ...(prev ?? {}), [id]: !(prev?.[id] ?? false) };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function reset() {
    window.localStorage.removeItem(STORAGE_KEY);
    setChecked({});
  }

  const state = checked ?? {};

  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
  const doneCount = categories.reduce(
    (sum, c) => sum + c.items.filter((item) => state[item.id] === true).length,
    0,
  );
  const overallPct = totalItems === 0 ? 0 : Math.round((doneCount / totalItems) * 100);

  return (
    <div className="mt-8">
      <div className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span className="text-white">Overall completion</span>
            <span className="tabular-nums text-neon-cyan">{overallPct}%</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-raised">
            <div
              className="h-full rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan transition-all duration-300"
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-mist">
            {doneCount} of {totalItems} done — progress is saved in your browser.
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-mist transition hover:border-neon-pink/60 hover:text-neon-pink"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Reset
        </button>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {categories.map((category) => {
          const done = category.items.filter((item) => state[item.id] === true).length;
          return (
            <section key={category.id} className="card p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-white">{category.title}</h2>
                <span className="text-xs font-semibold tabular-nums text-neon-cyan">
                  {done}/{category.items.length}
                </span>
              </div>
              <p className="mt-1 text-xs text-mist">{category.blurb}</p>
              <ul className="mt-4 space-y-2">
                {category.items.map((item) => {
                  const isDone = state[item.id] === true;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => toggle(item.id)}
                        aria-pressed={isDone}
                        className={`flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-surface-raised ${
                          isDone ? 'text-mist/60 line-through' : 'text-slate-200'
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                        ) : (
                          <Circle className="mt-0.5 h-4 w-4 shrink-0 text-line" aria-hidden />
                        )}
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
