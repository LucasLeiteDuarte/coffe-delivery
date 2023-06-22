import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 100%;
padding: 1.25rem;
padding-top: 0;

background: ${({theme})=> theme.colors["base-card"]};
border-radius: 6px 36px 6px 36px;



img {
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
}

`;