import { H1, Header, Section, SectionItem, Image } from "./styled";
import jackk from "./../images/jackk.jpg";

export const Welcome = () => {
  return (
    <div>
      <Header border>
        <H1>Witaj, miło Cię poznać.</H1>
        <p>Przełącz motyw</p>
      </Header>
      <Section>
        <SectionItem>
          <Image src={jackk} alt="view of Jacek" />
        </SectionItem>
        <SectionItem>
          Jacek Warzecha
          <br />
          drjackys@gmail.com
          <br />
          519-158-450
        </SectionItem>
      </Section>
    </div>
  );
};
