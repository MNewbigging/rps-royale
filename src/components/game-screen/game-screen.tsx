import "./game-screen.scss";

export function GameScreen() {
  return (
    <div className="game-screen">
      <div className="vs">You VS Bot</div>
      <div className="rps">
        <div className="rock-btn">Rock</div>
        <div className="paper-btn">Paper</div>
        <div className="scissors-btn">Scissors</div>
      </div>
    </div>
  );
}
