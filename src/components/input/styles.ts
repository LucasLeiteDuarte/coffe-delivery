import styled from "styled-components";

export const InputStyleContainer = styled.input`
  height: 2.625rem;

  background: ${({ theme })=> theme.colors["base-input"]};
  border: 1px solid ${({ theme })=> theme.colors["base-button"]};
  border-radius: 4px;
  transition: 0.4s;

 
  &:focus {
    border-color: ${({theme })=> theme.colors["brand-yellow-dark"]};
  }

  color: ${({theme})=> theme.colors["base-text"]};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({theme})=> theme.colors["base-label"]};
  }

`;