import { StyledFooter, StyledLink } from "./styled";

export const Footer = () => {
  return (
    <StyledFooter>
      Challenge by{" "}
      <StyledLink href="https://www.frontendmentor.io/" target="blank">
        Frontend Mentor
      </StyledLink>
      . Coded by{" "}
      <StyledLink href="https://github.com/Siedemus" target="blank">
        Siedemus
      </StyledLink>
      .
    </StyledFooter>
  );
};
