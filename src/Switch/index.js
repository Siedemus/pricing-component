import {
  StyledContainer,
  StyledOption,
  SwitchContainer,
  SwitchSlider,
} from "./styled";

export const Switch = ({ toggleChecked, isChecked }) => {
  return (
    <StyledContainer>
      <StyledOption>Annually</StyledOption>
      <SwitchContainer onClick={toggleChecked}>
        <SwitchSlider isChecked={isChecked}></SwitchSlider>
      </SwitchContainer>
      <StyledOption>Monthly</StyledOption>
    </StyledContainer>
  );
};
