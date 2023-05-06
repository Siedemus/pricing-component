import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 40px 0 0 0;
`;

const StyledOption = styled.p`
  color: ${({ theme }) => theme.colors.lightBlue};
`;

const SwitchContainer = styled.div`
  background: ${({ theme }) => theme.gradients.basicGradient};
  width: 50px;
  height: 28px;
  border-radius: 15px;
  padding-top: 3.5px;
  padding-left: 3px;
  cursor: pointer;
`;

const SwitchSlider = styled.div`
  background-color: ${({ theme }) => theme.colors.veryLightBlue};
  width: 21px;
  height: 21px;
  border-radius: 15px;
  margin-left: ${({isChecked}) => isChecked ? "23px" : "0"};
  transition: 0.5s;
`;

export { StyledContainer, StyledOption, SwitchContainer, SwitchSlider };
