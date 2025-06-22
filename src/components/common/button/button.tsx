import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
