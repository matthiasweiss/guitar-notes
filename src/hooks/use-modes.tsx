import { randomElement } from '../utils';

const modes = [
  'Ionian',
  'Dorian',
  'Phrygian',
  'Lydian',
  'Mixolydian',
  'Aeolian',
  'Locrian',
];

export type Mode = (typeof modes)[number];

export const useModes = () => {
  const randomMode = () => randomElement(modes);

  return { randomMode };
};
