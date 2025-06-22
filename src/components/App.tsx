import { appState, Screen } from "../app-state/app-state";
import { useEventUpdater } from "../hooks/use-event-updater";
import { GameScreen } from "./game-screen/game-screen";
import { MainMenu } from "./main-menu/main-menu";

export function App() {
  useEventUpdater("game-started");

  let screen: JSX.Element = <MainMenu />;

  if (appState.screen === Screen.Game && appState.game) {
    screen = <GameScreen game={appState.game} />;
  }

  return screen;
}
