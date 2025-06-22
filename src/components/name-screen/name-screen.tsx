import { useState } from "react";
import "./name-screen.scss";
import { Button } from "../common/button/button";
import { appState } from "../../app-state/app-state";

export function NameScreen() {
  const [name, setName] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div className="name-screen">
      <span>Enter name:</span>
      <input type="text" value={name} onChange={onChangeName} />
      <Button text="Next" onClick={() => appState.createPlayer(name)} />
    </div>
  );
}
