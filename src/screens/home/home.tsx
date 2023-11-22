import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-4 pt-6 md:pt-4">
        <div>
          Learning the guitar is hard, even tough there are only 12 unique
          notes. I built the tools listed here to improve my understanding of
          the fretboard and to assist me while practicing the guitar.
        </div>
        <div>
          <Link to={ROUTES.game.path}>This game</Link> aims at improving the
          knowledge of notes around the fretboard. It generates a random note
          and string combination and you then have to guess on which fret of
          that string the given is located.
        </div>
        <div>
          <Link to={ROUTES.key.path}>This generator</Link> can be used to
          generate a random key or even a combination of a random key and mode.
          This can be helpful when practicing scales and chords.
        </div>
      </div>
    </>
  );
};
