import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import coffelogo from '../../assests/Logo.svg';
import { useCart } from '../../hooks/useCart';
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

export function Header() {

  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffelogo} alt="Coffee Logo" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to="/completeOrderPage">
            <HeaderButton variant='yellow'>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight='fill' />
            </HeaderButton>
          </NavLink>

        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
