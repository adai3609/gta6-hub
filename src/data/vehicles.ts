import type { DatabaseEntry } from '@/types';

/**
 * Vehicles seen in official GTA 6 trailers. Only vehicle TYPES that are
 * unambiguously visible in official trailer footage are listed. No stats,
 * names, or specifications are invented — everything fills in at launch.
 */
export const vehicles: DatabaseEntry[] = [
  {
    slug: 'modern-supercar',
    name: 'Modern Supercar',
    category: 'Supercars',
    summary:
      'A low-slung modern supercar appears prominently in official trailer street scenes. Design, name, and performance figures are unconfirmed until launch.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Class', value: 'Supercar (type)' },
      { label: 'Top speed', value: 'TBD', tbd: true },
      { label: 'Price in game', value: 'TBD', tbd: true },
    ],
  },
  {
    slug: 'muscle-car',
    name: 'Muscle Car',
    category: 'Muscle',
    summary:
      'Muscle cars appear in official trailer footage, fitting the Leonida setting. Specific models and stats are unconfirmed.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Class', value: 'Muscle (type)' },
      { label: 'Top speed', value: 'TBD', tbd: true },
      { label: 'Price in game', value: 'TBD', tbd: true },
    ],
  },
  {
    slug: 'sport-motorcycle',
    name: 'Sport Motorcycle',
    category: 'Motorcycles',
    summary:
      'Motorcycles are clearly visible in official trailer footage, including beach riding scenes. Models and specs are unconfirmed.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Class', value: 'Motorcycle (type)' },
      { label: 'Top speed', value: 'TBD', tbd: true },
      { label: 'Price in game', value: 'TBD', tbd: true },
    ],
  },
  {
    slug: 'police-cruiser',
    name: 'Police Cruiser',
    category: 'Emergency',
    summary:
      'Law-enforcement cruisers appear in official trailer footage patrolling Vice City streets. Livery and pursuit stats are unconfirmed.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Class', value: 'Emergency (type)' },
      { label: 'Top speed', value: 'TBD', tbd: true },
      { label: 'Price in game', value: 'N/A' },
    ],
  },
  {
    slug: 'jetski',
    name: 'Jetski',
    category: 'Watercraft',
    summary:
      'Personal watercraft appear in official trailer footage along the coast. Performance figures are unconfirmed.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Class', value: 'Watercraft (type)' },
      { label: 'Top speed', value: 'TBD', tbd: true },
      { label: 'Price in game', value: 'TBD', tbd: true },
    ],
  },
  {
    slug: 'airboat',
    name: 'Airboat',
    category: 'Watercraft',
    summary:
      'A swamp-style airboat appears in official trailer footage through the Leonida wetlands — a strong hint at Everglades-style exploration.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Class', value: 'Watercraft (type)' },
      { label: 'Top speed', value: 'TBD', tbd: true },
      { label: 'Price in game', value: 'TBD', tbd: true },
    ],
  },
  {
    slug: 'seaplane',
    name: 'Seaplane',
    category: 'Aviation',
    summary:
      'A seaplane appears in official trailer footage over coastal water. Flight characteristics are unconfirmed.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Class', value: 'Aviation (type)' },
      { label: 'Top speed', value: 'TBD', tbd: true },
      { label: 'Price in game', value: 'TBD', tbd: true },
    ],
  },
  {
    slug: 'helicopter',
    name: 'Helicopter',
    category: 'Aviation',
    summary:
      'Helicopters appear in official trailer footage in the skies above Vice City. Variants and specs are unconfirmed.',
    status: 'trailer-seen',
    sources: ['Official trailer footage'],
    details: [
      { label: 'Class', value: 'Aviation (type)' },
      { label: 'Top speed', value: 'TBD', tbd: true },
      { label: 'Price in game', value: 'TBD', tbd: true },
    ],
  },
];
