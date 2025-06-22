import {
  BotGameManager,
  RoundResult,
  RPS,
} from "../../../app-state/bot-game-manager";
import { Player } from "../../../app-state/player";
import "./rps-reveal.scss";

interface RpsRevealProps {
  game: BotGameManager;
}

export function RpsReveal({ game }: RpsRevealProps) {
  const roundResult = game.getRoundResult();
  if (!roundResult) return null;

  let resultString = "";
  switch (roundResult) {
    case RoundResult.Win:
      resultString = "You won!";
      break;
    case RoundResult.Draw:
      resultString = "It's a draw!";
      break;
    case RoundResult.Lose:
      resultString = "You lost!";
      break;
  }

  return (
    <div className="rps-reveal">
      <div>{resultString}</div>
      <div>
        {opponent.name} chose {opponentChoice}
      </div>
      <div>You chose {playerChoice}</div>
    </div>
  );
}
