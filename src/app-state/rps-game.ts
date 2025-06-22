import { eventListener } from "../events/event-listener";
import { Bot } from "./bot";
import { Player } from "./player";

export enum RoundResult {
  Win = "win",
  Draw = "draw",
  Lose = "lose",
}

export enum RPS {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

interface RoundData {
  playerChoice: RPS;
  botChoice: RPS;
  result: RoundResult; // from pov of player
}

// Encompasses a complete game of rps, which might take multiple rounds to complete
export class RpsGame {
  previousRounds: RoundData[] = [];

  constructor(
    public player: Player, // the local player
    public opponent: Bot
  ) {
    this.startRound();
  }

  makePlayerChoice(choice: RPS) {
    const playerChoice = choice;
    const botChoice = this.opponent.getRandomChoice();
    const result = getRoundResult(playerChoice, botChoice);

    // This round is now done
    this.previousRounds.push({
      playerChoice,
      botChoice,
      result,
    });

    eventListener.fire("show-choices", null);
  }

  startRound() {}
}

export function simulateBotGame(a: Bot, b: Bot) {
  const rounds: RoundData[] = [];

  do {
    const aChoice = a.getRandomChoice();
    const bChoice = b.getRandomChoice();
    const result = getRoundResult(aChoice, bChoice);

    rounds.push({
      playerChoice: aChoice,
      botChoice: bChoice,
      result,
    });
  } while (rounds[rounds.length - 1].result === RoundResult.Draw);

  return rounds;
}

export function getRoundResult(playerChocie: RPS, botChoice: RPS): RoundResult {
  if (playerChocie === botChoice) return RoundResult.Draw;

  switch (playerChocie) {
    case RPS.Rock:
      if (botChoice === RPS.Paper) return RoundResult.Lose;
      if (botChoice === RPS.Scissors) return RoundResult.Win;
    case RPS.Paper:
      if (botChoice === RPS.Scissors) return RoundResult.Lose;
      if (botChoice === RPS.Rock) return RoundResult.Win;
    case RPS.Scissors:
      if (botChoice === RPS.Rock) return RoundResult.Lose;
      if (botChoice === RPS.Paper) return RoundResult.Win;
    default:
      return RoundResult.Draw; // should never happen!
  }
}
