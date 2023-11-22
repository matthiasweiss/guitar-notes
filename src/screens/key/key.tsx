import { useState } from 'react';
import { NoteCard } from '../../components/note-card';
import { NOTES, Note } from '../../models/notes';
import { randomElement } from '../../utils';
import { MODES, Mode } from './modes';

export const Key = () => {
  const randomNote = () => randomElement(NOTES);
  const randomMode = () => randomElement(MODES);

  const [note, setNote] = useState<Note>(randomNote);
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
          <input
            type="checkbox"
            checked={areModesEnabled}
            onChange={() => {}}
          />
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
