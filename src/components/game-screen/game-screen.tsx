import { BotGame, GameStage } from "../../app-state/bot-game";
import { useEventUpdater } from "../../hooks/use-event-updater";
import { RpsPicker } from "./rps-picker/rps-picker";

interface GameScreenProps {
  game: BotGame;
}

export function GameScreen({ game }: GameScreenProps) {
  useEventUpdater("show-choices");

  switch (game.stage) {
    case GameStage.Choose:
      return <RpsPicker onChoose={game.choose} />;

    default:
      return <div>Error in GameScreen switch</div>;
  }
}
