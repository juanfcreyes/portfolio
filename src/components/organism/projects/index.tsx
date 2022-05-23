import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useApp } from "../../../hooks/useApp";
import { Project } from "../../../models/project";
import { mockProjects } from "../../../utils/mock-response";
import { ProjectCard } from "../cards/project";
import { ProjectsWrapper } from "./styles";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>();
  const { addNotification, removeLastNotification } = useApp();
  const { t } = useTranslation();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        addNotification(t("loader.text"));
        const projectsData = await mockProjects();
        setProjects(projectsData);
        removeLastNotification();
      } catch (_) {
        removeLastNotification();
      }
    };

    loadProjects();
  }, []);

  return (
    <ProjectsWrapper>
      {projects &&
        projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
    </ProjectsWrapper>
  );
};
