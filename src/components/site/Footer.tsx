import Link from 'next/link';
import { footerDisclaimer, siteNav } from '@/data/site';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line/60 bg-ink-soft">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-lg font-black uppercase tracking-tight text-white">
              GTA 6 <span className="text-sunset">Hub</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              The unofficial fan resource for Grand Theft Auto VI — countdown,
              guides, databases and tools for launch day and beyond.
            </p>
          </div>
          <nav aria-label="Footer guides">
            <p className="text-xs font-bold uppercase tracking-widest text-neon-purple">
              Guides
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {siteNav.guides.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-mist hover:text-neon-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer database and tools">
            <p className="text-xs font-bold uppercase tracking-widest text-neon-purple">
              Database &amp; Tools
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {[...siteNav.database, ...siteNav.tools].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-mist hover:text-neon-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-line/60 pt-6 text-xs leading-relaxed text-mist/60">
          {footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
