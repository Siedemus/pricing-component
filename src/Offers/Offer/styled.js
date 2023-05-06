import styled, { css } from "styled-components";

const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 45px;
  border-radius: 15px;
  box-shadow: 14px 17px 30px -7px ${({ theme }) => theme.colors.lightBlue};
  min-width: 355px;

  ${({ pro }) =>
    pro &&
    css`
      background: ${({ theme }) => theme.gradients.basicGradient};
    `}

  @media (min-width: 1100px) {
    border-radius: 15px 0 0 15px;

    ${({ pro }) =>
      pro &&
      css`
        height: 530px;
        border-radius: 15px;
        justify-content: center;
      `}

    ${({ last }) =>
      last &&
      css`
        border-radius: 0 15px 15px 0;
      `}
  }
`;

const OfferHeader = styled.h3`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 19px;
  text-align: center;

  ${({ pro }) =>
    pro &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

const Price = styled.div`
  font-size: 70px;
  color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
  align-self: center;

  ${({ pro }) =>
    pro &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

const AdventagesContainer = styled.div`
  margin: 20px 0;
  border-top: 1px ${({ theme }) => theme.colors.lightBlue} solid;

  ${({ pro }) =>
    pro &&
    css`
      color: ${({ theme }) => theme.colors.white};
      border-top: 1px ${({ theme }) => theme.colors.white} solid;
    `}
`;

const Adventage = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  padding: 15px;
  border-bottom: 1px ${({ theme }) => theme.colors.lightBlue} solid;
  text-align: center;

  ${({ pro }) =>
    pro &&
    css`
      color: ${({ theme }) => theme.colors.white};
      border-bottom: 1px ${({ theme }) => theme.colors.white} solid;
    `}
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.gradients.bttnGradient};
  background-position: left;
  background-size: 400%;
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: 1.5s;

  ${({ pro }) =>
    pro &&
    css`
      background: ${({ theme }) => theme.gradients.whiteGradient};
      background-position: left;
      background-size: 600%;
    `}

  &:hover {
    background-position: right;
  }
`;

const ButtonText = styled.p`
  ${({ pro }) =>
    pro &&
    css`
      background: ${({ theme }) => theme.gradients.bttnGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

const StylledDollar = styled.span`
  font-size: 35px;
`;

export {
  OfferContainer,
  OfferHeader,
  Price,
  AdventagesContainer,
  Adventage,
  StyledButton,
  ButtonText,
  StylledDollar,
};
