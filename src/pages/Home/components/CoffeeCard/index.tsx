import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuantityInput } from "../../../../components/QuantityInput";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/FormatMoney";

import { RegularText, TitleText } from "../../../../components/Typography";
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
  const { cartItems, addCoffeeToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const existingCartItem = cartItems.find(item => item.id === coffee.id);
    if (existingCartItem) {
      setQuantity(existingCartItem.quantity);
    }
  }, [cartItems, coffee.id]);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => (state > 1 ? state - 1 : state));
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    };

    addCoffeeToCart(coffeeToAdd);
    toast.success(`${quantity} ${coffee.name}${quantity > 1 ? 's' : ''} foram adicionado${quantity > 1 ? 's' : ''} ao carrinho!`, {
      position: "top-center"
    });
  }

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
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text">
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
