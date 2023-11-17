import { useState } from 'react';
import { NoteCard } from '../../components/note-card';
import { Mode, useModes } from '../../hooks/use-modes';
import { Note, useNotes } from '../../hooks/use-notes';

export const Key = () => {
  const { randomNote } = useNotes();
  const { randomMode } = useModes();

  const [note, setNote] = useState<Note>(randomNote());
  const [mode, setMode] = useState<Mode>(randomMode());
  const [areModesEnabled, setAreModesEnabled] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="flex items-center gap-4">
        <NoteCard isLarge note={note} />
        {areModesEnabled && <div>{mode}</div>}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() =>
            setAreModesEnabled((_areModesEnabled) => !_areModesEnabled)
          }
        >
          <input type="checkbox" checked={areModesEnabled} />
          <div>Enable Modes</div>
        </div>

        <button
          className="rounded-md bg-gray-700 px-4 py-2 text-gray-100"
          onClick={() => {
            setNote(randomNote());
            setMode(randomMode());
          }}
        >
          Generate random key
        </button>
      </div>
    </div>
  );
};
