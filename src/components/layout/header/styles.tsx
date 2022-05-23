import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { themes } from '../../../styles/ColorStyles';

export const HeaderWrapper = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color ${themes.light.primary};
  padding: 1.25rem 3rem;
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;

  @media(prefers-color-scheme: dark) {
    background-color: ${themes.dark.primary};
  }

  .links-container {
    display: flex;
    gap: 2rem;
  }

`

export const LinksWrapper = styled.div`
  display: flex;
  gap: 2em;
`

export const LinkButton = styled(Link)`
  color: ${themes.dark.text1};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
`

