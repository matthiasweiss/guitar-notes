export const GUITAR_STRINGS = ['E', 'A', 'D', 'G', 'B', 'e'] as const;

export type GuitarString = (typeof GUITAR_STRINGS)[number];
