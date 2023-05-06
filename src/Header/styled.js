import styled from "styled-components";

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  margin: 60px 0 0 0;
  font-size: ${({theme}) => theme.fonts.basicFS};
`;