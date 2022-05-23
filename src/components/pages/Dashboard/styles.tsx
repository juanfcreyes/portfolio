import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template: "aboutme" "projects";
  padding: 2rem;
  margin-top: 4rem;
  @media (min-width: 1200px) {
    grid-template: "aboutme projects" / auto 1fr;
    padding: 5rem;
    margin-top: 0;
  }
`;
