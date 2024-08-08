import { render } from "@testing-library/react";
import { calculateWinner } from "../utils/calculateWinner";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import { Board } from "../components/Board/Board";

const user = userEvent.setup();

describe("calculateWinner", () => {
  test("should return the winner if a player wins", () => {
    const squares = ["X", "X", "X", null, null, null, null, null, null];
    expect(calculateWinner(squares)).toBe("X");
  });

  test('should return "Draw" when all squares are filled and there is no winner', () => {
    const squares = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    expect(calculateWinner(squares)).toBe("Draw");
  });
});

describe("Board behavior", () => {
  test("check if user click 2 times at the same field and value doesn't change", async () => {
    render(<Board />);
    const squareFive = screen.getByTestId("square-5");
    await user.click(squareFive);
    await user.click(squareFive);
    expect(squareFive.textContent).toBe("X");
  });
});
