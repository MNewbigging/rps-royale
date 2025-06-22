import { appState } from "../../app-state/app-state";
import { Button } from "../common/button/button";
import "./main-menu.scss";

export function MainMenu() {
  return (
    <div className="main-menu">
      <p>Welcome {appState.player?.name}!</p>
      <Button disabled text="Online" onClick={appState.playOnline} />
      <Button text="Offline" onClick={appState.playOffline} />
    </div>
  );
}
