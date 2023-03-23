import styled, { css } from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 6fr auto;

  padding: ${({ theme }) => theme.distance.twenty}px;

  ${({ border }) =>
    border &&
    css`
      border-bottom: solid 0.5px ${({ theme }) => theme.color.grey};
    `}
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.bigger}px;
  margin: 0;
  text-align: center;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 75px;

  font-size: ${({ theme }) => theme.fontSize.bigger}px;
  padding: ${({ theme }) => theme.distance.twenty}px;
`;

export const SectionItem = styled.div`
  display: grid;
  justify-content: center;
`;

export const Image = styled.img`
  max-height: 350px;
  border-radius: 15px;
`;
