import { RPS } from "../../../app-state/bot-game";
import "./rps-picker.scss";

interface RpsPickerProps {
  onChoose: (choice: RPS) => void;
}

export function RpsPicker({ onChoose }: RpsPickerProps) {
  return (
    <div className="rps-picker">
      <div className="btn" onClick={() => onChoose(RPS.Rock)}>
        Rock
      </div>
      <div className="btn" onClick={() => onChoose(RPS.Paper)}>
        Paper
      </div>
      <div className="btn" onClick={() => onChoose(RPS.Scissors)}>
        Scissors
      </div>
    </div>
  );
}
