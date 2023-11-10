import { Link } from 'react-router-dom';
import { PATHS } from '../../constants';

export const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          Learning the guitar is hard, even tough there are only 12 unique
          notes. I built the tools listed here to improve my understanding of
          the fretboard and to assist me while practicing the guitar.
          <br />
          <br />
          <Link to={PATHS.GAME}>This game</Link> aims at improving the knowledge
          of notes around the fretboard. It generates a random note and string
          combination and you then have to guess on which fret of that string
          the given is located.
        </div>
      </div>
    </>
  );
};
