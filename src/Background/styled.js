import styled, { css } from "styled-components";

export const Image = styled.img`
  position: absolute;
  z-index: -1;

  ${({ top }) =>
    top &&
    css`
      right: 0;
      top: 0;
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      left: 0;
      bottom: 0;
    `}

    @media (max-width: 1100px) {
    ${({ bottom }) =>
      bottom &&
      css`
        display: none;
      `}
  }
`;
