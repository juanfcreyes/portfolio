import styled from "styled-components";
import { themes } from "../../../styles/ColorStyles";

export interface ButtonProps {
  block?: boolean;
  variant?: 'primary' | 'danger'
  width?: string
}


export const Button = styled.button<ButtonProps>`
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  width: ${({ block, width = 'aunto' }) => (block  ?  "100%" :  width)};
  cursor: pointer;
  transition: filter 0.5s, transform 0.5s;

  color: ${themes.dark.text1};
  background-color:  ${({variant = 'primary'}) =>  variant === 'primary' ? themes.light.primary : themes.light.danger};
  @media (prefers-color-scheme: dark) {
    background-color:   ${({variant = 'primary'}) =>  variant === 'primary' ? themes.dark.primary : themes.dark.danger};
  }

  &:hover {
    filter: opacity(0.9);
  }

  &:active {
    box-shadow: inset 0px 0px 8px 4px ${themes.light.backgroundColor};
    @media (prefers-color-scheme: dark) {
      box-shadow: inset 0px 0px 8px 4px ${themes.dark.backgroundColor};
    }
    transform: scale(0.98);
  }
`;
