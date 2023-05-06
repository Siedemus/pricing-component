import {
  OfferContainer,
  OfferHeader,
  Price,
  AdventagesContainer,
  Adventage,
  StyledButton,
  ButtonText,
  StylledDollar,
} from "./styled";

export const Offer = ({ header, price, storage, users, upload, pro, last }) => {
  return (
    <OfferContainer pro={pro} last={last}>
      <OfferHeader pro={pro}>{header}</OfferHeader>
      <Price pro={pro}>
        <StylledDollar>$</StylledDollar>
        {price}
      </Price>
      <AdventagesContainer pro={pro}>
        <Adventage pro={pro}>{storage}</Adventage>
        <Adventage pro={pro}>{users}</Adventage>
        <Adventage pro={pro}>{upload}</Adventage>
      </AdventagesContainer>
      <StyledButton pro={pro}>
        <ButtonText pro={pro}>Learn More</ButtonText>
      </StyledButton>
    </OfferContainer>
  );
};
