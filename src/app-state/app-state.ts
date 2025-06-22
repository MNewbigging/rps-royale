import { eventListener } from "../events/event-listener";
import { Game } from "./game";

export enum Screen {
  MainMenu,
  Game,
}

class AppState {
  screen: Screen = Screen.MainMenu;
  game?: Game;

  newGame = () => {
    console.log("new offline game");

    this.game = new Game();
    this.screen = Screen.Game;

    eventListener.fire("game-started", null);
  };
}

export const appState = new AppState();
