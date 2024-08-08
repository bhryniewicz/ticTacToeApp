import { MouseEventHandler, useState } from "react";
import { StyledSquare, StyledSpan } from "./Square.styles";

interface SquareProps {
  value: string | null;
  testId: string;
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
}

export const Square: React.FC<SquareProps> = ({
  value,
  testId,
  onSquareClick,
}) => {
  const [doAnimate, setDoAnimate] = useState<boolean>(false);
  return (
    <StyledSquare
      data-testid={testId}
      onClick={(e) => {
        onSquareClick(e);
        setDoAnimate((prev) => !prev);
      }}
    >
      <StyledSpan
        $animate={doAnimate}
        onAnimationEnd={(prev) => setDoAnimate(!prev)}
      >
        {value}
      </StyledSpan>
    </StyledSquare>
  );
};
