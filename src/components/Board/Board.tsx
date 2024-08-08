import { useEffect } from "react";
import { Square } from "../Square/Square";
import { GameStatus } from "../GameStatus/GameStatus";
import { ResetButton } from "../ResetButton/ResetButton";
import { StyledBoard, StyledWrapper } from "./Board.styles";
import { useMachine } from "@xstate/react";
import { gameMachine } from "../../machines/gameMachine";

export const Board = () => {
  const [state, send] = useMachine(gameMachine);

  useEffect(() => {
    console.log(state.context);
  }, [state.context]);

  useEffect(() => {
    send({ type: "START" });
  }, [send]);

  return (
    <StyledWrapper>
      <GameStatus
        isXNext={state.context.isXNext}
        squares={state.context.squares}
      />
      <StyledBoard>
        {state.context.squares.map((elem, idx = 0) => {
          return (
            <Square
              testId={`square-${idx}`}
              key={`square-${idx}`}
              value={elem}
              onSquareClick={() => send({ type: "UPDATE", idx })}
            />
          );
        })}
      </StyledBoard>
      <ResetButton setSquares={() => send({ type: "RESTART" })} />
      {JSON.stringify(state.value)}
    </StyledWrapper>
  );
};
