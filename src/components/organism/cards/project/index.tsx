import React, { FC } from "react";
import { Project } from "../../../../models/project";
import { Link } from "../../../atoms/link/styles";
import codeIcon from "./../../../../assets/code.svg";
import {
  CardBody,
  CardDescription,
  CardTitle,
  CardVersion,
  CardVersionText,
  ProjectCardWrapper,
  ProjectTags,
  TagIcon,
  TagIconWrapper,
  TagText,
} from "./styles";

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <ProjectCardWrapper>
      <Link href={project.link} target="_blank" rel="noopener">
        <CardBody>
          <CardVersion>
            <CardVersionText>{project.version}</CardVersionText>
          </CardVersion>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardBody>
        <ProjectTags>
          <TagIconWrapper>
            <TagIcon src={codeIcon} alt="Icon Tag Project" />
          </TagIconWrapper>
          <TagText>{project.tag}</TagText>
        </ProjectTags>
      </Link>
    </ProjectCardWrapper>
  );
};
