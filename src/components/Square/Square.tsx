import { MouseEventHandler } from "react";
import { StyledSquare } from "./Square.styles";

interface SquareProps {
  value: string | null;
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
}

export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <StyledSquare className="square" onClick={onSquareClick}>
      {value}
    </StyledSquare>
  );
};
