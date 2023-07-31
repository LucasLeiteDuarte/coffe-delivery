import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
height: 6.5rem;

background: ${({theme})=> theme.colors["base-background"]};

>div{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
// serve para o header se manter fixo no pagina
position: sticky;
top: 0;
left: 0;
z-index: 5;



`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`;

interface HeaderButtonProps{
  variant: "purple" | "yellow"
}
// o headerbutton recebe a interfeace com as variantes<HeaderButtonProps> e assim pode aplicar seus theme
export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  min-width: 2.3rem;
  height: 2.3rem;

  border-radius: 6px;
  border: none;

  padding: 0 0.5rem;
  position: relative;

  font-size: ${({theme})=> theme.textSizes["text-regular-S"]};

  ${({variant, theme})=> css`
  background: ${theme.colors[`brand-${variant}-light`]};
  color: ${theme.colors[`brand-${variant}-dark`]}
  `}

  ${({ variant, theme}) =>
    variant === "purple" &&
    css`
    svg {
      color: ${theme.colors["brand-purple"]};
    }
    `}

`;
