import styled from "styled-components";
import { H3, SmallText } from "../../../../styles/TextStyles";
import { Card } from "../../../atoms/card/styles";

export const ProjectCardWrapper = styled(Card)`
  grid-template: "body" 1fr "footer" auto;
  display: grid;
`;

export const CardBody = styled.div`
  grid-area: body;
`;

export const CardVersion = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CardVersionText = styled.div`
  border-radius: 0.25rem;
  padding: 0.25rem;
  background: rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
`;

export const CardTitle = styled(H3)`
  font-style: normal;
  word-break: break-word;
  @media (max-width: 450px) {
    font-size: 24px;
  }
  padding-bottom: 1.5rem;
`;

export const CardDescription = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 100%;
  @media (min-width: 450px) {
    font-size: 18px;
    line-height: 130%;
  }
`;

export const ProjectTags = styled.div`
  grid-area: footer;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const TagIconWrapper = styled.div`
  display: grid;
  align-items: center;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50px;
`;

export const TagIcon = styled.img`
  margin: auto;
  width: 20px;
  height: 20px;
`;

export const TagText = styled(SmallText)`
  line-height: 100%;
`;
