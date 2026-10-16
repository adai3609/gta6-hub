'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { siteNav } from '@/data/site';

const groups = [
  { label: 'Guides', items: siteNav.guides },
  { label: 'Database', items: siteNav.database },
  { label: 'Tools', items: siteNav.tools },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-black uppercase tracking-tight text-white">
            GTA 6 <span className="text-sunset">Hub</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {groups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-mist transition hover:bg-surface hover:text-white focus-visible:text-white"
              >
                {group.label}
                <ChevronDown className="h-3.5 w-3.5" aria-hidden />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 rounded-xl border border-line bg-surface-raised p-2 opacity-0 shadow-xl transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-surface hover:text-neon-cyan ${
                      pathname === item.href ? 'text-neon-cyan' : 'text-mist'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            href="/release-date"
            className="ml-2 rounded-lg bg-neon-pink px-4 py-2 text-sm font-bold text-ink transition hover:shadow-glow-pink"
          >
            Nov 19, 2026
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-mist hover:text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Menu className="h-5 w-5 rotate-90" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <nav aria-label="Mobile" className="border-t border-line/60 bg-ink px-4 pb-6 pt-2 md:hidden">
          {groups.map((group) => (
            <div key={group.label} className="mt-3">
              <p className="text-xs font-bold uppercase tracking-widest text-neon-purple">
                {group.label}
              </p>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-lg px-3 py-2 text-sm text-mist hover:bg-surface hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
