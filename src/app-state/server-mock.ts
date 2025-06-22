import { Player } from "./player";

class ServerMock {
  lobbyQueue: Player[] = [];

  joinLobby(player: Player) {
    // No dupes
    const alreadyExists = this.lobbyQueue.some(
      (otherPlayer) => otherPlayer.id === player.id
    );
    if (alreadyExists) return;

    // Add to lobby queue
    this.lobbyQueue.push(player);
  }
}

export const server = new ServerMock();
