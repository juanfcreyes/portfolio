import styled from "styled-components";
import { themes } from "../../../../styles/ColorStyles";

export const AboutMeCardWrapper = styled.div`
  grid-area: aboutme;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 1rem;
  line-heigth: 1.5rem;
  color: ${themes.light.text1} @media (prefers-color-scheme) {
    color: ${themes.dark.text1};
  }
`;

export const RowData = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
`;
