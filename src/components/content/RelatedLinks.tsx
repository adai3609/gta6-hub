import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { RelatedLink } from '@/types';

export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold tracking-tight text-white">Keep reading</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="card card-hover group flex flex-col gap-1 p-5"
          >
            <span className="flex items-center justify-between font-bold text-white group-hover:text-neon-cyan">
              {link.title}
              <ArrowRight className="h-4 w-4 text-neon-cyan" aria-hidden />
            </span>
            <span className="text-sm leading-relaxed text-mist">{link.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
