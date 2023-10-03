const notes = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
] as const;

export type Note = (typeof notes)[number];
export type NoteData = { classList: string };

const notesDataMap: Record<Note, NoteData> = {
  C: { classList: 'bg-yellow-300 text-yellow-800' },
  'C#': { classList: 'bg-amber-500 text-amber-100' },
  D: { classList: 'bg-orange-500 text-orange-100' },
  'D#': { classList: 'bg-red-500 text-red-100' },
  E: { classList: 'bg-red-700 text-red-100' },
  F: { classList: 'bg-fuchsia-700 text-fuchsia-100' },
  'F#': { classList: 'bg-violet-800 text-violet-100' },
  G: { classList: 'bg-indigo-800 text-indigo-100' },
  'G#': { classList: 'bg-blue-800 text-blue-100' },
  A: { classList: 'bg-green-800 text-green-100' },
  'A#': { classList: 'bg-green-600 text-green-100' },
  B: { classList: 'bg-green-300 text-green-900' },
};

export const useNotes = () => {
  return { notes, notesDataMap };
};
