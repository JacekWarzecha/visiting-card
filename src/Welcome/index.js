import {
  H1,
  Header,
  Section,
  SectionItem,
  Image,
  Loading,
  Paragraph,
} from "./styled";
import { Link } from "../DataProjects/styled";
import { useSkills } from "./useSkills";

import jackkShort from "./../images/jackkShort.jpg";

export const Welcome = () => {
  const skills = useSkills();
  return (
    <div>
      <Header border>
        <H1>Witaj, miło Cię poznać.</H1>
      </Header>
      <Section>
        <SectionItem contentEnd>
          <Image src={jackkShort} alt="view of Jacek" />
        </SectionItem>
        <SectionItem>
          <Paragraph>🙂 Jacek Warzecha</Paragraph>
          <Link
            padding
            fontSmaller
            title="Napisz do mnie"
            href="mailto:drjackys@gmail.com"
          >
            📬 drjackys@gmail.com
          </Link>
          <Link padding title="Zadzwoń do mnie" href="tel:+48.519-158-450">
            ☎️ 519-158-450
          </Link>
        </SectionItem>
      </Section>
      {skills.state === "loading" ? <Loading> Ładuję...</Loading> : skills}
    </div>
  );
};
