import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 35px;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.fontFS};
  color: ${({ theme }) => theme.colors.blue};
  padding: 30px;
`;

export const StyledLink = styled.a`
  color: hsl(237, 63%, 64%);
  text-decoration: none;
`;
