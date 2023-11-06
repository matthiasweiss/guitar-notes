import { CircleOfFifths } from '../../components/circle-of-fifths';

export const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <CircleOfFifths></CircleOfFifths>
        <div>
          Learning the guitar is hard, even tough there are only 12 unique
          notes. I built the tools listed here to improve my understanding of
          the fretboard and to assist me while practicing the guitar.
        </div>
      </div>
    </>
  );
};
