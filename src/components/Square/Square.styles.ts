import styled, { css, keyframes } from "styled-components";

interface StyledSpanProps {
  $animate: boolean;
}

const flash = keyframes`
  from {
      opacity: 0;
      font-size: 0.5rem;
  }

  to {
      opacity: 1;
      font-size: 2.5rem;
  }
`;

export const StyledSquare = styled.button`
  width: 100px;
  height: 100px;
  background-color: #242424;
  border: none;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

export const StyledSpan = styled.span<StyledSpanProps>`
  width: 100px;
  height: 100px;
  font-size: 2.5rem;
  //props added to execute animation in good time
  animation: ${(props) =>
    props.$animate &&
    css`
      ${flash} 0.3s forwards
    `};
`;
