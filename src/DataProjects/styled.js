import styled, { css } from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  color: currentColor;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${({ theme }) => theme.distance.twenty}px;

      @media (max-width: 767px) {
        display: flex;
        padding: 10px 20px;
        justify-content: center;
      }
    `}

  @media(max-width:767px) {
    ${({ fontSmaller }) =>
      fontSmaller &&
      css`
        font-size: 20px;
      `}
  }

  ${({ colorBlue }) =>
    colorBlue &&
    css`
      color: ${({ theme }) => theme.color.littleBlue};
    `}
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.grey};
  }

  &:active {
    filter: brightness(110%);
  }
`;
