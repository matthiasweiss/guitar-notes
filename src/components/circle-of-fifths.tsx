import { Note } from '../models/notes';
import { NoteCard } from './note-card';

type CircleOfFifthsProps = { selected?: Note };

export const CircleOfFifths = ({ selected }: CircleOfFifthsProps) => {
  const circleOfFifths: Note[] = [
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
  ];

  return (
    <div className="flex flex-col justify-center gap-2 md:flex-row md:gap-2">
      {circleOfFifths.map((note) => {
        return (
          <div
            key={note}
            className={selected && selected !== note ? 'opacity-40' : ''}
          >
            <NoteCard note={note} className="cursor-default"></NoteCard>
          </div>
        );
      })}
    </div>
  );
};
