import { useGame } from '../use-game';

export const Initial = () => {
  const { start } = useGame();

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div>
        This game is used to practice where the 12 different notes are located
        on each fret on the guitar. In each round, a random note and string are
        generated and you have to pick the correct fret for that note on the
        given string. The current string is shown on the left (or on top if you
        are on mobile).
      </div>

      <a onClick={start}>Start game</a>
    </div>
  );
};
