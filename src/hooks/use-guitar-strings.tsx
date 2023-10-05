import { Note } from './use-notes';

export type GuitarString = Extract<Note, 'E' | 'A' | 'D' | 'G' | 'B'>;

const guitarStrings: GuitarString[] = ['E', 'A', 'D', 'G', 'B'];

export const useGuitarStrings = () => {
  const randomString = () => {
    const randomIndex = Math.floor(Math.random() * guitarStrings.length);
    return guitarStrings[randomIndex];
  };

  return { guitarStrings, randomString };
};
