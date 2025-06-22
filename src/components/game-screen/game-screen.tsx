import { appState } from "../../app-state/app-state";
import { BotGame, GameStage, RPS } from "../../app-state/bot-game";
import { useEventUpdater } from "../../hooks/use-event-updater";
import "./game-screen.scss";
import { RpsPicker } from "./rps-picker/rps-picker";

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
  useEventUpdater("show-choices");

  switch (game.stage) {
    case GameStage.Choose:
      return <RpsPicker onChoose={game.choose} />;

    default:
      return <div>Error in GameScreen switch</div>;
  }
}
