import styled, { css } from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  color: currentColor;
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
