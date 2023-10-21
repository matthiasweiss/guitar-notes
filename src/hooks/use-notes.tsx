import { randomElement } from '../utils';

const notes = [
  'C',
  'G',
  'D',
  'A',
  'E',
  'B',
  'F#',
  'C#',
  'Ab',
  'Eb',
  'Bb',
  'F',
] as const;

export type Note = (typeof notes)[number];
export type NoteData = { classList: string };

const notesDataMap: Record<Note, NoteData> = {
  C: { classList: 'bg-red-700 text-red-100' },
  G: { classList: 'bg-red-500 text-red-100' },
  D: { classList: 'bg-orange-500 text-orange-100' },
  A: { classList: 'bg-amber-500 text-amber-100' },
  E: { classList: 'bg-yellow-300 text-yellow-800' },
  B: { classList: 'bg-green-300 text-green-900' },
  'F#': { classList: 'bg-green-600 text-green-100' },
  'C#': { classList: 'bg-green-800 text-green-100' },
  Ab: { classList: 'bg-blue-800 text-blue-100' },
  Eb: { classList: 'bg-indigo-800 text-indigo-100' },
  Bb: { classList: 'bg-violet-800 text-violet-100' },
  F: { classList: 'bg-fuchsia-700 text-fuchsia-100' },
};

export const useNotes = () => {
  const randomNote = () => randomElement(notes);

  return { notes, notesDataMap, randomNote };
};
