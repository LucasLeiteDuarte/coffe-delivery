import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
  display: flex;
  justify-content: space-between;

  margin-top: 2.5rem;
  gap: 2rem;
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;