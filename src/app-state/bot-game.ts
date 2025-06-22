import { eventListener } from "../events/event-listener";
import { Player } from "./player";

export enum RPS {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

export enum GameStage {
  Choose, // presented rps choices, must pick one
  Wait, // for other player to make their choice
  Reveal, // show both choices, reveal winner (after a few seconds)
  Ladder, // if you lost takes you to current game ladder (should update in realtime)
}

interface Pair {
  a: Player;
  b: Player;
}

export class BotGame {
  players: Player[] = [];
  rungs: Pair[][] = [];

  stage: GameStage = GameStage.Choose;

  currentPlayerChoice?: RPS;
  currentBotChoice?: RPS;

  constructor(private player: Player, private size = 8) {
    // Create bots for this game
    this.setupPlayers();

    // Get pairs for first rung of the ladder
    const pairs = this.getPairs();
    this.rungs.push(pairs);

    console.log("first rung", pairs);
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

  choose(playerChoice: RPS) {
    console.log("player chose", playerChoice);

    // Now get random bot choice
    const botChoice = randomRps();
    this.currentBotChoice = botChoice;

    // Show it
    this.stage = GameStage.Reveal;
    eventListener.fire("show-choices", null);
  }

  private setupPlayers() {
    // Add local player
    this.players.push(this.player);
    // Fill with fake players
    for (let i = 1; i < this.size; i++) {
      this.players.push({
        id: crypto.randomUUID(),
        name: `Bot ${i}`,
      });
    }
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
