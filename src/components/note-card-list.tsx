import { useNotes } from '../hooks/use-notes';
import { NoteCard } from './note-card';

export const NoteCardList = () => {
  const { notes } = useNotes();

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {notes.map((note) => {
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
