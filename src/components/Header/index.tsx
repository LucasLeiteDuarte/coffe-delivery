import { MapPin, ShoppingCart } from 'phosphor-react'; // Importa os ícones do pacote Phosphor React
import { NavLink } from 'react-router-dom'; // Importa o componente NavLink do React Router
import coffelogo from '../../assests/Logo.svg'; // Importa o logotipo do café
import { useCart } from '../../hooks/useCart'; // Importa o hook personalizado useCart para acessar o contexto do carrinho
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles"; // Importa os componentes estilizados

export function Header() {
  const { cartQuantity } = useCart(); // Obtém a quantidade de itens no carrinho usando o hook useCart

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffelogo} alt="Coffee Logo" />
        </NavLink>

        {/* Renderiza o logotipo do café e cria links para a página inicial usando NavLink */}

        <HeaderButtonsContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          {/* Renderiza um botão estilizado para exibir a localização (Porto Alegre, RS) usando o ícone MapPin */}

          <NavLink to="/completeOrderPage">
            <HeaderButton variant='yellow'>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight='fill' />
            </HeaderButton>
          </NavLink>

          {/* Renderiza um botão estilizado que exibe o ícone do carrinho de compras (ShoppingCart) e a quantidade de itens no carrinho, se houver, usando NavLink */}

        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
