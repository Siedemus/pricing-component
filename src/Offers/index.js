import { OffersContainer } from "./styled";
import { Offer } from "./Offer";

export const Offers = ({ isChecked }) => {
  return (
    <OffersContainer>
      <Offer
        header={"Basic"}
        price={isChecked ? "19.99" : "199.99"}
        storage={"500 GB Storage"}
        users={"2 Users Allowed"}
        upload={"Send up to 3 GB"}
      ></Offer>
      <Offer
        header={"Professional"}
        price={isChecked ? "24.99" : "249.99"}
        storage={"1 TB storage"}
        users={"5 Users Allowed"}
        upload={"Send up to 10 GB"}
        pro={true}
      ></Offer>
      <Offer
        header={"Master"}
        price={isChecked ? "39.99" : "399.99"}
        storage={"2 TB storage"}
        users={"10 Users Allowed"}
        upload={"Send up to 20 GB"}
        last={true}
      ></Offer>
    </OffersContainer>
  );
};
