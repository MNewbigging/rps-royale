import { appState, Screen } from "../app-state/app-state";
import { useEventUpdater } from "../hooks/use-event-updater";
import { MainMenu } from "./main-menu/main-menu";
import { NameScreen } from "./name-screen/name-screen";

export function App() {
  useEventUpdater("created-player", "joined-lobby", "game-started");
  console.log("app render");

  switch (appState.screen) {
    case Screen.Name:
      return <NameScreen />;
    case Screen.MainMenu:
      return <MainMenu />;
  }
}
