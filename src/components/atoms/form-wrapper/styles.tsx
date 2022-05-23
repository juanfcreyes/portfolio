import styled from "styled-components";
import { Card } from "../card/styles";

export const FormWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 420px;
  border-radius: 1rem; 
  backdrop-filter: blur(2rem);
  box-sizing: border-box;
`;
