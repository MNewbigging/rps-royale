import { appState } from "../../app-state/app-state";
import { BotGame, RPS } from "../../app-state/bot-game";
import "./game-screen.scss";

interface GameScreenProps {
  game: BotGame;
}

/**
 * Game comp flow:
 *
 * 1 - show RPS choice buttons, player picks one
 *
 * 2 - choice moves to center of screen
 *
 * 3 - when opponent choice is made, show it below yours with result string
 */

export function GameScreen({ game }: GameScreenProps) {
  const opponent = game.getPlayerOpponent()?.name ?? "";

  return (
    <div className="game-screen">
      <div className="vs">Opponent: {opponent}</div>
      <div className="rps">
        <div className="rock-btn" onClick={() => game.choose(RPS.Rock)}>
          Rock
        </div>
        <div className="paper-btn" onClick={() => game.choose(RPS.Paper)}>
          Paper
        </div>
        <div className="scissors-btn" onClick={() => game.choose(RPS.Scissors)}>
          Scissors
        </div>
      </div>
    </div>
  );
}
