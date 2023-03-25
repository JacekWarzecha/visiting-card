import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 15px;
  padding: ${({ theme }) => theme.distance.twenty}px;
  border-bottom: solid 0.5px ${({ theme }) => theme.color.grey};
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.bigger}px;
  margin: 0;
  display: grid;
  justify-content: center;
  text-align: center;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  padding: ${({ theme }) => theme.distance.twenty}px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.normal}px;
    line-height: 2.5;
  }
`;

export const SectionItem = styled.div`
  display: grid;
  justify-content: center;
`;

export const Image = styled.img`
  max-height: 350px;
  border-radius: 15px;
`;

export const SectionSkills = styled.div`
  padding-top: 25px;
  font-size: ${({ theme }) => theme.fontSize.mid}px;
  text-align: center;
`;

export const List = styled.ul`
  font-style: italic;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ListItem = styled.li`
  margin: 15px 35px;
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;
