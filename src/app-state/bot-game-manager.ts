import { Bot } from "./bot";
import { Player } from "./player";
import { getRoundResult, RoundResult, RpsGame } from "./rps-game";

interface Pair {
  a: Player;
  b: Player;
}

export class BotGameManager {
  players: Player[] = [];
  rungs: Pair[][] = [];

  constructor(public player: Player, private size = 8) {
    // Players array starts filled with bots + player
    this.setupPlayers();

    // Divide players into pairs
    const pairs = this.getPairs();
    this.rungs.push(pairs);
  }

  getPlayerOpponent() {
    if (!this.rungs.length) return;

    // Look into the last/current ladder rung
    const currentRung = this.rungs[this.rungs.length - 1];

    for (const pair of currentRung) {
      if (pair.a.id === this.player.id) return pair.b;
      if (pair.b.id === this.player.id) return pair.a;
    }
  }

  private setupPlayers() {
    // Add local player
    this.players.push(this.player);

    // Fill remaining slots with bots
    for (let i = 1; i < this.size; i++) {
      this.players.push(new Bot(`Bot ${i}`));
    }
  }

  private nextStage() {
    // Pair remaining players
    const pairs = this.getPairs();

    // Start a game with player pair
    const rpsGame = new RpsGame(this.player, ...);

    // Simulate the other bot games.
  }

  private getPairs() {
    const total = this.players.length;
    if (total % 2 !== 0) throw Error("game size should be power of 2");

    shuffleArray(this.players);

    const pairs: Pair[] = [];

    for (let i = 0; i < total; i += 2) {
      const a = this.players[i];
      const b = this.players[i + 1];
      pairs.push({ a, b });
    }

    return pairs;
  }


}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const rnd = Math.floor(Math.random() * (i + 1));
    [array[i], array[rnd]] = [array[rnd], array[i]];
  }
}

function randomRps() {
  const rnd = Math.floor(Math.random() * 3);
  return [RPS.Rock, RPS.Paper, RPS.Scissors][rnd];
}
