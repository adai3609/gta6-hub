import type { DatabaseEntry } from '@/types';

/**
 * Only weapon TYPES that are unambiguously visible in official trailer
 * footage are listed at category level. No models, names, or stats invented.
 */
export const weapons: DatabaseEntry[] = [
  {
    slug: 'handgun',
    name: 'Handgun',
    category: 'Sidearms',
    summary:
      'Sidearms are clearly visible in official trailer footage. Specific models, stats, and the weapon-customization system are unconfirmed until launch.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Category', value: 'Sidearm (type)' },
      { label: 'Damage', value: 'TBD', tbd: true },
      { label: 'Attachments', value: 'TBD', tbd: true },
    ],
  },
  {
    slug: 'rifle',
    name: 'Rifle',
    category: 'Long guns',
    summary:
      'Long guns appear in official trailer footage. Specific models and ballistics are unconfirmed until launch.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Category', value: 'Long gun (type)' },
      { label: 'Damage', value: 'TBD', tbd: true },
      { label: 'Attachments', value: 'TBD', tbd: true },
    ],
  },
];
