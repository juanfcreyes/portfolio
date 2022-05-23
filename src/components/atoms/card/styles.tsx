import styled from "styled-components";
import { themes } from "../../../styles/ColorStyles";

export const Card = styled.div`
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-sizing: border-box;
  width: 100%;
  ${themes.light.card};
  @media (prefers-color-scheme: dark) {
    ${themes.dark.card};
  }
`;
