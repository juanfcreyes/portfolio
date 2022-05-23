import React from "react";
import { AboutMeCard } from "../../organism/cards/aboutme";
import { Projects } from "../../organism/projects";
import { DashboardWrapper } from "./styles";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <AboutMeCard></AboutMeCard>
      <Projects></Projects>
    </DashboardWrapper>
  );
};

export default Dashboard;
