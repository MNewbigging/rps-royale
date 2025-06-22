import { appState } from "../app-state/app-state";
import { useEventUpdater } from "../hooks/use-event-updater";
import { GameScreen } from "./game-screen/game-screen";
import { MainMenu } from "./main-menu/main-menu";
import { NameScreen } from "./name-screen/name-screen";

export function App() {
  useEventUpdater("created-player", "game-started");

  // If the player is new (not cached from previous session)
  if (!appState.player) {
    return <NameScreen />;
  }

  // If there is no game in progress
  if (!appState.game) {
    return <MainMenu />;
  }

  // Show the game in progress
  return <GameScreen game={appState.game} />;
}
