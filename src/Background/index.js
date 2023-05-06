import { Image } from "./styled";
import top from "../Assets/images/bg-top.svg";
import bottom from "../Assets/images/bg-bottom.svg";

export const Background = () => {
  return (
    <>
      <Image src={top} top />
      <Image src={bottom} bottom />
    </>
  );
};
