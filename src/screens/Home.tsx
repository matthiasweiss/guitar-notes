import { Link } from 'react-router-dom';
import { NoteCardList } from '../components/note-card-list';
import { PATHS } from '../constants';

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <NoteCardList></NoteCardList>
        <div>
          Learning the guitar is hard, even tough there are only 12 unique
          notes. This little app tries to improve your understanding of the 12
          notes across the fretboard using a little game.
          <Link to={PATHS.GAME}>Go to game</Link>
        </div>
      </div>
    </>
  );
}
