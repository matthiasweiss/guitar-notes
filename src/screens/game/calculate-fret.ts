import { NOTES, Note } from '../../models/notes';
import { GuitarString } from './guitar-strings';

export const calculateFret = (params: {
  note: Note;
  guitarString: GuitarString;
}): number => {
  const { note, guitarString } = params;

  const noteIndex = NOTES.indexOf(note);
  const guitarStringIndex = NOTES.indexOf(
    guitarString === 'e' ? 'E' : guitarString,
  );

  const offset = noteIndex - guitarStringIndex;
  return offset >= 0 ? offset : offset + NOTES.length;
};
