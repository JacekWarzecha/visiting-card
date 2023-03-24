import { useState } from "react";
import {
  Button,
  SectionProjects,
  ItemProjects,
  Loading,
  Paragraph,
} from "./styled";

import { dataProjects } from "../DataProjects";

export const Projects = () => {
  const renderProjects = () =>
    setProjects(
      (projects) =>
        (projects = (
          <SectionProjects>
            {Object.values(dataProjects).map((projects) => (
              <ItemProjects key={projects.name}>
                <Paragraph fontBigger>{projects.name}</Paragraph>
                <Paragraph>Demo: {projects.linkPage} </Paragraph>
                <Paragraph>Repo: {projects.linkRepo} </Paragraph>
              </ItemProjects>
            ))}
          </SectionProjects>
        ))
    );

  const [projects, setProjects] = useState("");

  return (
    <div>
      <Button onClick={renderProjects}>Kliknij i poznaj moje projekty.</Button>
      <Loading>{projects}</Loading>
    </div>
  );
};
