import { MapPin } from 'phosphor-react';
import coffelogo from '../../assests/Logo.svg';
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffelogo} />

        <HeaderButtonsContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}