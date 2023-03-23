import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.color.littleGrey};

  margin-bottom: ${({ theme }) => theme.distance.twenty}px;
  padding: ${({ theme }) => theme.distance.ten}px;
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  transition: filter 0.25s;

  &:hover {
    filter: brightness(97%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(93%);
  }
`;

export const SectionProjects = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;

export const ItemProjects = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  border: solid 1px ${({ theme }) => theme.color.grey};
  line-height: 2;

  padding: ${({ theme }) => theme.distance.twenty}px;

  &:hover {
    background: ${({ theme }) => theme.color.littleGrey};
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  ${({ fontBigger }) =>
    fontBigger &&
    css`
      font-size: 26px;
    `}
`;

export const Loading = styled.div`
  text-align: center;
`;
