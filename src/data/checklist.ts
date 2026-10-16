import type { ChecklistCategory } from '@/types';

/**
 * Generic completion categories modeled on the series' long-running
 * 100% structure. Item lists finalize when Rockstar publishes the official
 * achievement/completion requirements — the tool is built to absorb that.
 */
export const checklistCategories: ChecklistCategory[] = [
  {
    id: 'story',
    title: 'Story & Missions',
    blurb: 'Main story and mission strands.',
    items: [
      { id: 'story-1', label: 'Complete the main story' },
      { id: 'story-2', label: 'Complete all mission strands to 100%' },
      { id: 'story-3', label: 'Complete all side missions and stranger encounters' },
      { id: 'story-4', label: 'Reach the end credits' },
      { id: 'story-5', label: 'Revisit any missable content before the point of no return' },
    ],
  },
  {
    id: 'vehicles',
    title: 'Vehicles',
    blurb: 'The garage completionist track.',
    items: [
      { id: 'vehicles-1', label: 'Drive at least one vehicle in every class' },
      { id: 'vehicles-2', label: 'Customize a vehicle at every shop type' },
      { id: 'vehicles-3', label: 'Complete all vehicle-based activities and races' },
      { id: 'vehicles-4', label: 'Discover every watercraft type in the Keys' },
      { id: 'vehicles-5', label: 'Fly every aircraft type' },
    ],
  },
  {
    id: 'properties',
    title: 'Properties & Business',
    blurb: 'Everything you can own in Leonida.',
    items: [
      { id: 'prop-1', label: 'Purchase every purchasable property' },
      { id: 'prop-2', label: 'Complete all property/business mission chains' },
      { id: 'prop-3', label: 'Maximize passive income streams' },
      { id: 'prop-4', label: 'Own a safehouse in every major region' },
    ],
  },
  {
    id: 'collectibles',
    title: 'Collectibles',
    blurb: 'Hidden things across the state.',
    items: [
      { id: 'coll-1', label: 'Find every collectible type' },
      { id: 'coll-2', label: 'Complete every collectible set' },
      { id: 'coll-3', label: 'Discover all named landmarks' },
      { id: 'coll-4', label: 'Find every hidden package or stash' },
      { id: 'coll-5', label: 'Complete all photo/landmark challenges' },
    ],
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    blurb: 'The last few percent.',
    items: [
      { id: 'misc-1', label: 'Max out character stats' },
      { id: 'misc-2', label: 'Complete all random events' },
      { id: 'misc-3', label: 'Unlock all fast travel options' },
      { id: 'misc-4', label: 'Complete every activity and minigame at least once' },
      { id: 'misc-5', label: 'Earn every achievement / trophy' },
    ],
  },
];
