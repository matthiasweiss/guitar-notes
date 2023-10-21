import { NoteCardList } from '../../components/note-card-list';

export const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <NoteCardList></NoteCardList>
        <div>
          Learning the guitar is hard, even tough there are only 12 unique
          notes. I built the tools listed here to improve my understanding of
          the fretboard and to assist me while practicing the guitar.
        </div>
      </div>
    </>
  );
};
