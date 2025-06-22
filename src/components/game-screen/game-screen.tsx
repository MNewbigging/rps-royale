import { Game, RPS } from "../../app-state/game";
import "./game-screen.scss";

interface GameScreenProps {
  game: Game;
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
  return (
    <div className="game-screen">
      <div className="vs">Opponent: Bot</div>
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
