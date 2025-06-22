import { eventListener } from "../events/event-listener";
import { BotGame } from "./bot-game";
import { Player } from "./player";
import { server } from "./server-mock";

export enum Screen {
  Name,
  MainMenu,
  Lobby,
  Game,
}

class AppState {
  screen: Screen;
  player?: Player;
  game?: BotGame;

  constructor() {
    // Check local storage for existing player data
    const player = this.loadPlayer();
    if (player) {
      this.player = player;
      this.screen = Screen.MainMenu; // can skip the name screen
    } else {
      this.screen = Screen.Name; // player needs to set name first
    }
  }

  createPlayer(name: string) {
    // Create the new player object
    const id = crypto.randomUUID(); // only available locally or via HTTPS
    this.player = { id, name };

    // Save in localstorage
    localStorage.setItem("player", JSON.stringify(this.player));

    // Change screen
    this.screen = Screen.MainMenu;

    eventListener.fire("created-player", null);
  }

  playOnline = () => {
    if (!this.player) return;

    // Join the game lobby
    server.joinLobby(this.player);

    // Show lobby screen
    this.screen = Screen.Lobby;
    eventListener.fire("joined-lobby", null);
  };

  playOffline = () => {
    if (!this.player) return;

    this.game = new BotGame(this.player);
    this.screen = Screen.Game;
    eventListener.fire("game-started", null);
  };

  private loadPlayer(): Player | undefined {
    const playerJson = localStorage.getItem("player");
    if (!playerJson) return undefined;

    return JSON.parse(playerJson) as Player;
  }
}

export const appState = new AppState();
