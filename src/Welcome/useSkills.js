import { dataSkills } from "../DataSkills";
import { useEffect, useState } from "react";
import { SectionSkills, List, ListItem } from "./styled";

export const useSkills = () => {
  const [skills, setSkills] = useState({ state: "loading" });

  useEffect(() => {
    setTimeout(() => {
      setSkills(
        (skills) =>
          (skills = (
            <SectionSkills>
              Technologie:
              <List>
                {dataSkills.map((skill) => (
                  <ListItem key={skill}>{skill}</ListItem>
                ))}
              </List>
            </SectionSkills>
          ))
      );
    }, 1250);
  }, []);
  return skills;
};
