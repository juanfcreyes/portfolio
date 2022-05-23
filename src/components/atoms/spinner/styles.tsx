import styled, { keyframes } from "styled-components";
import { themes } from "../../../styles/ColorStyles";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  border-radius: 50%;
  padding: 4rem;
  border: 0.25rem solid ${themes.light.primary};
  border-bottom: 0.25rem solid ${themes.light.secondary};
  animation: ${rotate} 2s linear infinite;
`;

