import { Board } from "./components/Board/Board";
import { GlobalStyle } from "./styles/globalStyles";

export const App = () => {
  return (
    <>
      {/* Add global styles to whole application (margins, font-family, colors etc.) */}
      <GlobalStyle />
      <Board />
    </>
  );
};
