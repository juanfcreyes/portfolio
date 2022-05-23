import styled from "styled-components";
import { themes } from "./ColorStyles";

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 36px;
  @media (min-width: 450px) {
    font-size: 48px;
  }
  margin: 0.5rem;
  color: ${themes.light.text1};
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 24px;
  @media (min-width: 450px) {
    font-size: 32px;
  }
`;

export const H3 = styled.h3`
  font-weight: bold;
  line-height: 100%
  font-size: 20px;
  @media (min-width: 450px) {
    font-size: 28px;
  }
`;



export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`

export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  @media (max-width: 450px) {
    font-size: 15px;
    line-height: 100%;
  }
`


export const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`

export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`