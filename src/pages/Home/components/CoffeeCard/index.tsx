import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";

import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/FormatMoney";
import { RegularText, TitleText } from "../intro/styles";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(0);

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }
  function handleDecrease() {
    if (quantity > 0) {  //Verfica se a quantidade é maior que 0 antes de deminuir.
      setQuantity((state) => state - 1)
    }
  }

  const { addCoffeeToCart } = useCart();// Obtém a função addCoffeeToCart do hook useCart para adicionar o item ao carrinho

  // Função para adicionar o item atual ao carrinho quando o botão é clicado
  function handleAddToCart() {
    // Cria um novo objeto coffeeToAdd, copiando todas as propriedades do coffee atual e adicionando a propriedade quantity com o valor inicial de 1
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    // Chama a função addCoffeeToCart do contexto do carrinho para adicionar o item ao carrinho
    addCoffeeToCart(coffeeToAdd)
  }

  // Formata o preço do café para exibir no formato de moeda
  const formattedPrice = formatMoney(coffee.price);


  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt={coffee.name} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="S">R$</RegularText>
          <TitleText size="M" color="text">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart} >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
