import styled from "styled-components";
import { themes } from "../../../styles/ColorStyles";
import { Caption } from "../../../styles/TextStyles";

export const LoginWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  margin-top: 2em;
  @media (min-width: 560px) {
    padding: 2rem;
  }
  color: ${themes.light.text2};
`;


export const ErrorDescription = styled(Caption)`
  color: ${themes.light.warning};
`;
