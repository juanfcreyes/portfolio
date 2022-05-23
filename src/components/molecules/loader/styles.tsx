import styled from "styled-components";
import { themes } from "../../../styles/ColorStyles";
import { H1 } from "../../../styles/TextStyles";

export const LoaderWrapper = styled.div`
  position: fixed;
  z-index:1000;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: ${themes.dark.loadingScreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoaderMessage = styled(H1)`
  color: ${themes.light.primary}
`
