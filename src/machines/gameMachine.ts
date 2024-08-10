import { assign, createMachine, or } from "xstate";
import { INIT_GAME_STATE } from "../utils/initialValues";
import { calculateWinner } from "../utils/calculateWinner";

export const gameMachine = createMachine(
  {
    id: "game",
    initial: "idle",
    context: {
      squares: INIT_GAME_STATE as Array<string | null>,
      isXNext: true as boolean,
    },
    states: {
      idle: {
        on: {
          START: "playing",
        },
      },
      playing: {
        on: {
          RESTART: {
            actions: "restartGame",
          },
          UPDATE: {
            actions: "updateSquares",
            guard: or(["didWin", "isDraw"]),
          },
        },
      },
    },
  },
  {
    actions: {
      updateSquares: assign(({ context, event }) => {
        if (context.squares[event.idx]) return {};
        const updatedSquares = context.squares.slice();
        updatedSquares[event.idx] = context.isXNext ? "X" : "O";

        return {
          squares: updatedSquares,
          isXNext: !context.isXNext,
        };
      }),
      restartGame: assign(() => {
        return {
          squares: INIT_GAME_STATE,
        };
      }),
    },
    guards: {
      didWin: ({ context }) => {
        return !calculateWinner(context.squares);
      },
      isDraw: ({ context }) => {
        return (
          context.squares.every((square) => square !== null) &&
          calculateWinner(context.squares) !== null
        );
      },
    },
  }
);
