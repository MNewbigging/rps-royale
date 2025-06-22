import { appState, Screen } from "../app-state/app-state";
import { useEventUpdater } from "../hooks/use-event-updater";
import { GameScreen } from "./game-screen/game-screen";
import { LobbyScreen } from "./lobby-screen/lobby-screen";
import { MainMenu } from "./main-menu/main-menu";
import { NameScreen } from "./name-screen/name-screen";

export function App() {
  useEventUpdater("created-player", "joined-lobby", "game-started");

  switch (appState.screen) {
    case Screen.Name:
      return <NameScreen />;
    case Screen.MainMenu:
      return <MainMenu />;
    case Screen.Lobby:
      return <LobbyScreen />;
    case Screen.Game:
      if (appState.game) return <GameScreen game={appState.game} />;
  }
}
