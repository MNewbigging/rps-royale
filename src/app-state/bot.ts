import { Player } from "./player";
import { RPS } from "./rps-game";

export class Bot implements Player {
  id = crypto.randomUUID();

  constructor(public name: string) {}

  getRandomChoice() {
    const rnd = Math.floor(Math.random() * 3);
    return [RPS.Rock, RPS.Paper, RPS.Scissors][rnd];
  }

  getLosingChoice(losesTo: RPS) {
    switch (losesTo) {
      case RPS.Rock:
        return RPS.Scissors;
      case RPS.Paper:
        return RPS.Rock;
      case RPS.Scissors:
        return RPS.Paper;
    }
  }

  getDrawingChoice(drawsWith: RPS) {
    return drawsWith;
  }
}
