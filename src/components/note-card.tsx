import { twMerge } from 'tailwind-merge';
import { Note, useNotes } from '../hooks/use-notes';

type NoteCardProps = { note: Note; className?: string; isLarge?: boolean };

export const NoteCard = ({ note, className, isLarge }: NoteCardProps) => {
  const { notesDataMap } = useNotes();
  const noteSpecificClasses = notesDataMap[note].classList;

  const defaultClasses =
    'flex w-fit items-center justify-center rounded-full w-9 h-9 text-sm';

  return (
    <div
      key={note}
      className={twMerge(
        defaultClasses,
        noteSpecificClasses,
        className,
        isLarge && 'h-16 w-16',
      )}
    >
      {note}
    </div>
  );
};
