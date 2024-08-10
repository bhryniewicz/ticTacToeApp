import { calculateWinner } from "../../utils/calculateWinner";
import { StyledGameStatus } from "./GameStatus.styles";

interface GameStatusProps {
  isXNext: boolean;
  squares: Array<string | null>;
}

export const GameStatus: React.FC<GameStatusProps> = ({ isXNext, squares }) => {
  const winner = calculateWinner(squares);
  const status = winner
    ? winner === "Draw"
      ? "Draw!!!"
      : `Winner is: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return <StyledGameStatus>{status}</StyledGameStatus>;
};
