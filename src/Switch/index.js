import {
  StyledContainer,
  StyledOption,
  SwitchContainer,
  SwitchSlider,
} from "./styled";
import { useState } from "react";

export const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitch = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <StyledContainer>
      <StyledOption>Annually</StyledOption>
      <SwitchContainer onClick={handleSwitch}>
        <SwitchSlider isChecked={isChecked}>

        </SwitchSlider>
      </SwitchContainer>
      <StyledOption>Monthly</StyledOption>
    </StyledContainer>
  );
};
