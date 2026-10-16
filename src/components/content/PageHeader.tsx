import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  crumbs: BreadcrumbItem[];
}

export function PageHeader({ eyebrow, title, children, crumbs }: PageHeaderProps) {
  return (
    <div className="border-b border-line/60 bg-gradient-to-b from-surface/60 to-transparent">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <Breadcrumbs items={crumbs} />
        <p className="text-xs font-bold uppercase tracking-widest text-neon-pink">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {children ? <div className="mt-4 max-w-3xl leading-relaxed text-mist">{children}</div> : null}
      </div>
    </div>
  );
}
