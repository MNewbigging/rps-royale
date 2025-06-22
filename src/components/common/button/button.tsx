import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}
