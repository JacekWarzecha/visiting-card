import {
  H1,
  Header,
  Section,
  SectionItem,
  Image,
  SectionSkills,
  List,
  ListItem,
} from "./styled";
import { Link } from "../projectsBase/styled";
import { skillsBase } from "../skillsBase";
import jackk from "./../images/jackk.jpg";

export const Welcome = () => {
  return (
    <div>
      <Header border>
        <H1>Witaj, miło Cię poznać.</H1>
      </Header>
      <Section>
        <SectionItem>
          <Image src={jackk} alt="view of Jacek" />
        </SectionItem>
        <SectionItem>
          🙂 Jacek Warzecha
          <Link href="mailto:drjackys@gmail.com">📬 drjackys@gmail.com</Link>
          <Link href="tel:+48.519-158-450">☎️ 519-158-450</Link>
        </SectionItem>
      </Section>
      <SectionSkills>
        Technologie:
        <List>
          {skillsBase.map((skill) => (
            <ListItem key={skill}>{skill}</ListItem>
          ))}
        </List>
      </SectionSkills>
    </div>
  );
};
