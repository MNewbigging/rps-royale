import { eventListener } from "../events/event-listener";
import { Game } from "./game";
import { Player } from "./player";

class AppState {
  player?: Player;
  game?: Game;

  createPlayer(name: string) {
    // Create the new player object
    const id = crypto.randomUUID(); // only available locally or via HTTPS
    this.player = new Player(id, name);
    eventListener.fire("created-player", null);
  }

  newGame = () => {
    console.log("new offline game");

    this.game = new Game();

    eventListener.fire("game-started", null);
  };
}

export const appState = new AppState();
