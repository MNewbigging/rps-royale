import { appState } from "../../app-state/app-state";
import { Button } from "../common/button/button";
import "./main-menu.scss";

export function MainMenu() {
  return (
    <div className="main-menu">
      <Button text="Play offline" onClick={appState.newGame} />
    </div>
  );
}
