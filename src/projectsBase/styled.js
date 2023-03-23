import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  color: currentColor;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.grey};
  }

  &:active {
    filter: brightness(110%);
  }
`;
