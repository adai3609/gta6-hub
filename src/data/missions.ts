import type { DatabaseEntry } from '@/types';

/**
 * Structure-only section. No mission data exists before launch — Rockstar
 * has not officially revealed mission names or counts. The data layer is
 * ready so entries can be added the day the game ships.
 */
export const missions: DatabaseEntry[] = [];

export const missionsNotice =
  'Rockstar has not revealed official mission names, counts, or structure ahead of launch. This database goes live on launch day with a complete, spoiler-safe mission list — story missions flagged separately from side content.';
