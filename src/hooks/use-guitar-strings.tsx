import { randomElement } from '../utils';
import { Note } from './use-notes';

export type GuitarString = Extract<Note, 'E' | 'A' | 'D' | 'G' | 'B'> | 'e';

const guitarStrings: GuitarString[] = ['E', 'A', 'D', 'G', 'B', 'e'];

export const useGuitarStrings = () => {
  const randomGuitarString = () => randomElement(guitarStrings);

  return { guitarStrings, randomGuitarString };
};
