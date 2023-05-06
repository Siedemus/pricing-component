import styled from "styled-components";

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  font-size: ${({theme}) => theme.fonts.basicFS};
`;