import { twMerge } from 'tailwind-merge';
import { NOTES_DATA_MAP, Note } from '../models/notes';

type NoteCardProps = { note: Note; className?: string; isLarge?: boolean };

export const NoteCard = ({ note, className, isLarge }: NoteCardProps) => {
  const noteSpecificClasses = NOTES_DATA_MAP[note].classList;

  const defaultClasses =
    'flex w-fit items-center justify-center rounded-full w-9 h-9 text-sm';

  return (
    <div
      key={note}
      className={twMerge(
        defaultClasses,
        noteSpecificClasses,
        isLarge && 'h-16 w-16',
        className,
      )}
    >
      {note}
    </div>
  );
};
