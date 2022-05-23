import styled from "styled-components";
import { themes } from "../../../styles/ColorStyles";

export const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border: medium none;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: all 0.5s;

  color: ${themes.light.text1};
  background-color: ${themes.light.backgroundForm};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
    background-color: ${themes.dark.backgroundForm};
  }

  &:focus {
    transform: scale(1.02);
  }
`;
