import { twMerge } from 'tailwind-merge';
import { Note, useNotes } from '../hooks/use-notes';

type NoteCardProps = { note: Note; className?: string };

export const NoteCard = ({ note, className }: NoteCardProps) => {
  const { notesDataMap } = useNotes();
  const noteSpecificClasses = notesDataMap[note].classList;

  const defaultClasses =
    'flex w-fit items-center justify-center rounded-full w-9 h-9 text-sm';

  return (
    <div
      key={note}
      className={twMerge(defaultClasses, noteSpecificClasses, className)}
    >
      {note}
    </div>
  );
};
