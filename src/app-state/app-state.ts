import { eventListener } from "../events/event-listener";

export enum Screen {
  MainMenu,
  Game,
}

class AppState {
  screen: Screen = Screen.MainMenu;

  newGame = () => {
    console.log("new offline game");

    this.screen = Screen.Game;

    eventListener.fire("game-started", null);
  };
}

export const appState = new AppState();
