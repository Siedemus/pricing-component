import styled from "styled-components";

export const OffersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 30px;
  }
`;
