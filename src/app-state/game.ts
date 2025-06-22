import { eventListener } from "../events/event-listener";

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

export class Game {
  currentPlayerChoice?: RPS;
  currentBotChoice?: RPS;

  choose(playerChoice: RPS) {
    console.log("player chose", playerChoice);

    // Now get random bot choice
    const botChoice = randomRps();
    this.currentBotChoice = botChoice;

    // Show it
    eventListener.fire("show-choices", null);
  }
}

function randomRps() {
  const rnd = Math.floor(Math.random() * 3);
  return [RPS.Rock, RPS.Paper, RPS.Scissors][rnd];
}
