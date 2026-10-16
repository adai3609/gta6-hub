import type { DatabaseEntry } from '@/types';

/**
 * Locations named in official GTA 6 trailer captions. Each entry only
 * carries what official footage/captions establish — no invented map data.
 */
export const locations: DatabaseEntry[] = [
  {
    slug: 'vice-city',
    name: 'Vice City',
    category: 'City',
    summary:
      'The iconic neon-soaked city returns as the centerpiece of GTA 6. Official trailer footage shows a modern take on Vice City with dense streets, beaches, and nightlife.',
    status: 'confirmed',
    sources: ['Official announcement', 'Official trailer footage'],
    details: [
      { label: 'Type', value: 'Major city' },
      { label: 'Region', value: 'State of Leonida' },
      { label: 'Districts', value: 'TBD', tbd: true },
    ],
  },
  {
    slug: 'leonida',
    name: 'State of Leonida',
    category: 'Region',
    summary:
      'Leonida is the fictional state where GTA 6 takes place — Rockstar’s take on Florida, spanning Vice City, coastlines, swamps, and small towns.',
    status: 'confirmed',
    sources: ['Official announcement'],
    details: [
      { label: 'Type', value: 'Game world / state' },
      { label: 'Known regions', value: 'Vice City, Leonida Keys, Port Gellhorn, Mount Kalaga National Park, Ambrosia' },
    ],
  },
  {
    slug: 'leonida-keys',
    name: 'Leonida Keys',
    category: 'Coastline',
    summary:
      'An island chain shown in official trailer footage — Rockstar’s version of the Florida Keys, connected by long bridges over turquoise water.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Type', value: 'Island chain' },
      { label: 'Region', value: 'State of Leonida' },
    ],
  },
  {
    slug: 'port-gellhorn',
    name: 'Port Gellhorn',
    category: 'Town',
    summary:
      'A coastal town named in official trailer footage, styled as a run-down beach town on Leonida’s west coast.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Type', value: 'Town' },
      { label: 'Region', value: 'State of Leonida' },
    ],
  },
  {
    slug: 'mount-kalaga',
    name: 'Mount Kalaga National Park',
    category: 'Wilderness',
    summary:
      'A national park named in official trailer footage, adding forest and inland wilderness to the state of Leonida.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Type', value: 'National park' },
      { label: 'Region', value: 'State of Leonida' },
    ],
  },
  {
    slug: 'ambrosia',
    name: 'Ambrosia',
    category: 'Town',
    summary:
      'A small town named in official trailer footage, located in inland Leonida near the sugar-mill country the trailers show.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Type', value: 'Town' },
      { label: 'Region', value: 'State of Leonida' },
    ],
  },
];
