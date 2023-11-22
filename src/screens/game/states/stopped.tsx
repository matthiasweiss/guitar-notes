import { useGame } from '../use-game';

export const Stopped = () => {
  const { answers, correctAnswers, restart } = useGame();

  return (
    <div className="flex flex-col gap-4 py-6">
      <div>
        Your final score was {correctAnswers.length}/{answers.length}
      </div>
      <button
        className="rounded-md bg-gray-700 px-4 py-2 text-gray-100"
        onClick={restart}
      >
        Restart game
      </button>
    </div>
  );
};
