import { calculateWinner } from "../../utils/calculateWinner";
import { StyledGameStatus } from "./GameStatus.styles";

interface GameStatusProps {
  isXNext: boolean;
  squares: Array<string | null>;
}

export const GameStatus: React.FC<GameStatusProps> = ({ isXNext, squares }) => {
  const winner = calculateWinner(squares);
  let status;

  if (winner == "Draw") {
    status = "Draw!!!";
  } else if (winner) {
    status = `Winner is: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return <StyledGameStatus>{status}</StyledGameStatus>;
};
