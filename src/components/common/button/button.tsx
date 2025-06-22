import "./button.scss";

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return <button className="btn">{text}</button>;
}
