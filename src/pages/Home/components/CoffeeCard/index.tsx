import Amerciano from "../../../../assests/CoffeeImg/Americano.png";
import { CoffeeCardContainer, Description, Name, Tags } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Amerciano} />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <Name> Expresso Tradicional </Name>
      <Description> O tradicional café feito com água que e grãos moídos</Description>


    </CoffeeCardContainer>
  )
}