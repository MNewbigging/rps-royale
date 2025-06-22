interface Player {
  id: string;
  name: string;
}

interface GameLobby {
  players: []; // all the players in this game
}

export class GameManager {
  queue = []; // players currently waiting to form a lobby
}
