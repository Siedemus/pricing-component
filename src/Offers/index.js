import { OffersContainer } from "./styled";
import { Offer } from "./Offer";

export const Offers = () => {
  return (
    <OffersContainer>
      <Offer
        header={"Basic"}
        price={"199.99"}
        storage={"500 GB Storage"}
        users={"2 Users Allowed"}
        upload={"Send up to 3 GB"}
      ></Offer>
      <Offer
        header={"Professional"}
        price={"249.99"}
        storage={"1 TB storage"}
        users={"5 Users Allowed"}
        upload={"Send up to 10 GB"}
        pro={true}
      ></Offer>
      <Offer
        header={"Master"}
        price={"399.99"}
        storage={"2 TB storage"}
        users={"10 Users Allowed"}
        upload={"Send up to 20 GB"}
        last={true}
      ></Offer>
    </OffersContainer>
  );
};
