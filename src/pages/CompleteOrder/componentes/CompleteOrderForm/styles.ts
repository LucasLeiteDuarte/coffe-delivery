import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width:640px;
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: auto){
    max-width:600px;
  }

`;

export const AddressFormContainer = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  @media (max-width: 1015px){
    display:block;
  }

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
    @media (max-width: 1015px){
    max-width:100%;
  }
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  
  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }
  @media (max-width: 1015px){
    display:block;
    }
`;