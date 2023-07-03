import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";

import { formatMoney } from "../../../../utils/FormatMoney";
import { RegularText } from "../intro/styles";
import { TitleText } from './../intro/styles';
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <Tags>
        {coffee.tags.map(tag => (
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
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>


    </CoffeeCardContainer>
  )
}