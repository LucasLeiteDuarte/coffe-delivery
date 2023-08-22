import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3.5rem;

  @media (min-width: 525px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1077px) {
    grid-template-columns: repeat(4, 1fr);
  }

`;