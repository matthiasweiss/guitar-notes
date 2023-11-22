import { Note } from '../../models/notes';
import { GuitarString } from './guitar-strings';

export type Answer = {
  note: Note;
  guitarString: GuitarString;
  fret: number;
  selectedFret: number;
};
