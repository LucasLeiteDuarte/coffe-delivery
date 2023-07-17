import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  border-bottom: 1px solid ${({theme})=> theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  >div{
    display: flex;
    align-items: center;
    gap: 1.25rem;
    img{
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700 ;
  }


`;
export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  >div{
    max-width: 4.5rem;
    height: 100%;
  }
`;
export const RemoveButton = styled.button`

`;
