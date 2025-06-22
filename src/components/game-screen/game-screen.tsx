import { BotGameManager, GameStage } from "../../app-state/bot-game-manager";
import { useEventUpdater } from "../../hooks/use-event-updater";
import { RpsPicker } from "./rps-picker/rps-picker";
import { RpsReveal } from "./rps-reveal/rps-reveal";

interface GameScreenProps {
  game: BotGameManager;
}

export function GameScreen({ game }: GameScreenProps) {
  useEventUpdater("show-choices");

  const opponent = game.getPlayerOpponent();
  if (!opponent) return null;

  switch (game.stage) {
    case GameStage.Choose:
      return <RpsPicker onChoose={game.choose} />;
    case GameStage.Reveal:
      return <RpsReveal game={game} />;

    default:
      return <div>Error in GameScreen switch</div>;
  }
}
