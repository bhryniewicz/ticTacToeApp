import { useState } from "react";
import { Square } from "../Square/Square";
import { calculateWinner } from "../../utils/calculateWinner";
import { GameStatus } from "../GameStatus/GameStatus";
import { INIT_GAME_STATE } from "../../utils/initialValues";
import { ResetButton } from "../ResetButton/ResetButton";
import { StyledBoard, StyledWrapper } from "./Board.styles";

export const Board = () => {
  const [IsXNext, setIsXNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<Array<string | null>>(INIT_GAME_STATE);

  function handleClick(squareIndex: number) {
    if (calculateWinner(squares) || squares[squareIndex]) {
      return;
    }
    const nextSquares = squares.slice();

    if (IsXNext) {
      nextSquares[squareIndex] = "X";
    } else {
      nextSquares[squareIndex] = "O";
    }

    setSquares(nextSquares);
    setIsXNext(!IsXNext);
  }

  return (
    <StyledWrapper>
      <GameStatus isXNext={IsXNext} squares={squares} />
      <StyledBoard>
        {squares.map((elem, idx = 0) => {
          return (
            <Square
              key={crypto.randomUUID()}
              value={elem}
              onSquareClick={() => handleClick(idx)}
            />
          );
        })}
      </StyledBoard>
      <ResetButton setSquares={setSquares} />
    </StyledWrapper>
  );
};
