import type { TimelineEvent } from '@/types';

/**
 * Facts below are compiled from official Rockstar Games / Take-Two
 * announcements (press release of June 24, 2026 and prior newswire posts).
 * Dates marked in comments are well-documented public milestones.
 */
export const gameFacts = {
  title: 'Grand Theft Auto VI',
  releaseDate: 'November 19, 2026',
  releaseDateIso: '2026-11-19T00:00:00-05:00',
  preloadDate: 'November 12, 2026',
  bonusCutoff: 'November 20, 2026',
  platforms: ['PlayStation 5', 'Xbox Series X|S'],
  priceStandard: '$79.99',
  priceUltimate: '$99.99',
  preOrderOpened: 'June 25, 2026',
  protagonists: ['Jason', 'Lucia'],
  setting: 'State of Leonida — Vice City returns',
  pcAtLaunch: false,
} as const;

export const keyFacts = [
  {
    label: 'Release Date',
    value: 'November 19, 2026',
    note: 'PS5 and Xbox Series X|S',
    href: '/release-date',
  },
  {
    label: 'Price',
    value: '$79.99 / $99.99',
    note: 'Standard and Ultimate editions',
    href: '/preorder',
  },
  {
    label: 'Platforms',
    value: 'PS5 · Xbox Series X|S',
    note: 'No PC version at launch',
    href: '/pc-release',
  },
  {
    label: 'Pre-Order Bonus',
    value: 'Vintage Vice City Pack',
    note: 'Purchases before November 20, 2026',
    href: '/preorder',
  },
] as const;

export const launchTimeline: TimelineEvent[] = [
  {
    date: 'December 4, 2023',
    label: 'Official announcement',
    description:
      'Rockstar Games officially confirms Grand Theft Auto VI with the first trailer, set in the state of Leonida.',
    kind: 'past',
  },
  {
    date: 'November 6, 2025',
    label: 'Second delay announced',
    description:
      'Rockstar moves the launch from the previously announced May 26, 2026 window to November 19, 2026.',
    kind: 'past',
  },
  {
    date: 'June 25, 2026',
    label: 'Pre-orders open',
    description:
      'Pre-orders begin at midnight local time. Standard ($79.99) and Ultimate ($99.99) editions are confirmed for PS5 and Xbox Series X|S.',
    kind: 'milestone',
  },
  {
    date: 'November 12, 2026',
    label: 'Pre-loading begins',
    description:
      'Digital pre-orders can pre-load the game. Physical copies with a download code also become available.',
    kind: 'future',
  },
  {
    date: 'November 19, 2026',
    label: 'Launch day',
    description:
      'Grand Theft Auto VI releases worldwide on PlayStation 5 and Xbox Series X|S.',
    kind: 'future',
  },
  {
    date: 'November 20, 2026',
    label: 'Bonus cutoff',
    description:
      'Last day for pre-orders and purchases to include the Vintage Vice City Pack.',
    kind: 'future',
  },
];
