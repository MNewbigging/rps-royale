import { eventListener } from "../events/event-listener";
import { Game } from "./game";
import { Player } from "./player";

class AppState {
  player?: Player;
  game?: Game;

  constructor() {
    // Check local storage for existing player data
    this.loadPlayer();
  }

  createPlayer(name: string) {
    // Create the new player object
    const id = crypto.randomUUID(); // only available locally or via HTTPS
    this.player = { id, name };

    // Save in localstorage
    localStorage.setItem("player", JSON.stringify(this.player));

    eventListener.fire("created-player", null);
  }

  newGame = () => {
    console.log("new offline game");

    this.game = new Game();

    eventListener.fire("game-started", null);
  };

  private loadPlayer() {
    const playerJson = localStorage.getItem("player");
    if (!playerJson) return;

    this.player = JSON.parse(playerJson);
  }
}

export const appState = new AppState();
