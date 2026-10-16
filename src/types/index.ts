export type EntryStatus = 'confirmed' | 'trailer-seen' | 'tbd';

export interface DatabaseEntry {
  slug: string;
  name: string;
  category: string;
  summary: string;
  status: EntryStatus;
  /** Where this information comes from, e.g. "Official Trailer 1" */
  sources: string[];
  /** Key/value rows rendered on the detail page; tbd rows show "To be confirmed" */
  details?: DatabaseDetailRow[];
}

export interface DatabaseDetailRow {
  label: string;
  value: string;
  tbd?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineEvent {
  date: string;
  label: string;
  description: string;
  kind: 'past' | 'milestone' | 'future';
}

export interface StatusRow {
  label: string;
  status: 'no' | 'pending' | 'info' | 'yes';
  value: string;
  note?: string;
}

export interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  blurb: string;
  items: ChecklistItem[];
}
