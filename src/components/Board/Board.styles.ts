import styled from "styled-components";

export const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  //end animation at its end and not come to start value
  animation: fade 1s forwards;

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
