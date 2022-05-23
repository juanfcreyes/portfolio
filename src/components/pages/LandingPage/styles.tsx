import styled from "styled-components";
import { themes } from "../../../styles/ColorStyles";
import { H1 } from "./../../../styles/TextStyles";

export const LandingPageWrapper = styled.div`

  padding: 4em;
  width: 100vw;
  box-sizing: border-box;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  height: auto;
  @media(min-width: 560px) {
    height: 300px;
  }

  background-color ${themes.light.primary};
  @media(prefers-color-scheme: dark) {
    background-color: ${themes.dark.primary};
  }
`;

export const Tittle = styled(H1)`
  font-size: 4em;
  color: ${themes.dark.text1};
  text-align: center;
`;

export const LottieWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 480px;
  margin-top: -10em;
`;
