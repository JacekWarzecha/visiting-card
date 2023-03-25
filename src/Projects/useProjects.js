import { useState } from "react";
import { SectionProjects, ItemProjects, Paragraph } from "./styled";

import { dataProjects } from "../DataProjects";

export const useProjects = () => {
  const [projects, setProjects] = useState("");

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
  return { projects, renderProjects };
};
