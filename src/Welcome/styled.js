import styled, { css } from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 15px;
  padding: ${({ theme }) => theme.distance.twenty}px;

  ${({ border }) =>
    border &&
    css`
      border-bottom: solid 0.5px ${({ theme }) => theme.color.grey};
    `}

  @media(max-width:767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.bigger}px;
  margin: 0;
  display: grid;
  justify-content: center;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 75px;

  font-size: ${({ theme }) => theme.fontSize.bigger}px;
  padding: ${({ theme }) => theme.distance.twenty}px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SectionSkills = styled.div`
  padding-top: 25px;
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: center;
`;

export const SectionItem = styled.div`
  display: grid;
  justify-content: center;
  /* ${({ orientation }) => orientation && css``} */
`;

export const Image = styled.img`
  max-height: 350px;
  border-radius: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  margin: 20px;
`;
