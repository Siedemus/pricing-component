import { Image } from "./styled";
import top from "../Assets/images/bg-top.svg";
import bottom from "../Assets/images/bg-bottom.svg";

export const Background = () => {
  return (
    <>
      <Image alt={"background top image"} src={top} top />
      <Image alt={"background bottom image"} src={bottom} bottom />
    </>
  );
};
