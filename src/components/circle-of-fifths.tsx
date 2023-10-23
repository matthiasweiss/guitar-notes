import { Note } from '../hooks/use-notes';
import { NoteCard } from './note-card';

export const CircleOfFifths = () => {
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
    <div className="flex flex-wrap justify-center gap-2">
      {circleOfFifths.map((note) => {
        return (
          <NoteCard
            key={note}
            note={note}
            className="cursor-default"
          ></NoteCard>
        );
      })}
    </div>
  );
};
