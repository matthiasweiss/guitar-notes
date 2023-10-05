import { GuitarString } from '../../hooks/use-guitar-strings';
import { Note, useNotes } from '../../hooks/use-notes';

export const calculateFret = (params: {
  note: Note;
  guitarString: GuitarString;
}): number => {
  const { note, guitarString } = params;
  const { notes } = useNotes();

  const noteIndex = notes.indexOf(note);
  const guitarStringIndex = notes.indexOf(guitarString);

  return noteIndex >= guitarStringIndex
    ? noteIndex - guitarStringIndex
    : noteIndex - guitarStringIndex + notes.length;
};
