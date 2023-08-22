import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
  width: 90%;
  max-width: 1150px;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 1015px){
    display:block;
  }

`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;