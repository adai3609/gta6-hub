export interface Retailer {
  name: string;
  type: 'Digital store' | 'Physical retail';
  note: string;
  confirmed: boolean;
}

export const retailers: Retailer[] = [
  {
    name: 'PlayStation Store',
    type: 'Digital store',
    note: 'Pre-order for PS5. Pre-load begins November 12, 2026.',
    confirmed: true,
  },
  {
    name: 'Microsoft Store',
    type: 'Digital store',
    note: 'Pre-order for Xbox Series X|S. Pre-load begins November 12, 2026.',
    confirmed: true,
  },
  {
    name: 'Rockstar Store',
    type: 'Digital store',
    note: 'Official store listing both console editions.',
    confirmed: true,
  },
  {
    name: 'Major retailers',
    type: 'Physical retail',
    note:
      'Physical copies with a download code are available from major game retailers starting November 12, 2026 — check your local stores for availability and pricing.',
    confirmed: true,
  },
];
