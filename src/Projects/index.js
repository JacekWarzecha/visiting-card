import { useState } from "react";
import {
  Button,
  SectionProjects,
  ItemProjects,
  Loading,
  Paragraph,
} from "./styled";

import { projectsBase } from "../projectsBase/projectsBase";

export const Projects = () => {
  const renderProjects = () =>
    setProjects(
      (projects) =>
        (projects = (
          <SectionProjects>
            {Object.values(projectsBase).map((projects) => (
              <ItemProjects key={projects.name}>
                <Paragraph fontBigger>{projects.name}</Paragraph>
                <Paragraph>Demo: {projects.linkPage} </Paragraph>
                <Paragraph>Repo: {projects.linkRepo} </Paragraph>
              </ItemProjects>
            ))}
          </SectionProjects>
        ))
    );

  const [projects, setProjects] = useState("Oczekuję na kliknięcie");

  return (
    <div>
      <Button onClick={renderProjects}>Kliknij i poznaj moje projekty.</Button>
      <Loading>{projects}</Loading>
    </div>
  );
};
