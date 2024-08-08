import { Dispatch, SetStateAction } from "react";
import { INIT_GAME_STATE } from "../../utils/initialValues";
import { StyledButton } from "./ResetButton.styles";

interface ResetButtonProps {
  setSquares: Dispatch<SetStateAction<Array<string | null>>>;
}
export const ResetButton: React.FC<ResetButtonProps> = ({ setSquares }) => {
  return (
    <StyledButton onClick={() => setSquares(INIT_GAME_STATE)}>
      Restart game
    </StyledButton>
  );
};
