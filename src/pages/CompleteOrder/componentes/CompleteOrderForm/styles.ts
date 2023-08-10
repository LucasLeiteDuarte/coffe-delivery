import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div `
  display: flex;
  flex-direction: column;
  
  gap: 0.75rem;
  width: 40rem;
`;
export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

`;
export const AddressFormContainer = styled.div `
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  width: 100%;

  .cep {
    grid-column: span 3; // para oculpar toda a linha 
    max-width: 12.5rem; // para ficar do tamanho do modelo
  }
  .street {
    grid-column: span 3;
  }

  .complement-input-container{
    grid-column: span 2; // span para espandir duas colunas á patirar da que ele está
    position: relative;
  }
  .complement{
    
    width: 21.7rem;
 
  }
  .optional-text {
    position: absolute;
    bottom: 0.3rem;
    right: 1.2rem;
    font-size: 0.8em;
    transform: translateY(-50%);
    color:${({theme})=> theme.colors["base-label"]};
  }

`;
export const PaymentMethodOptiosContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr); //repetir 3 colunas de 1fr
  gap: 0.75rem;

`;