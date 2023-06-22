import Amerciano from "../../../../assests/CoffeeImg/Americano.png";
import { CoffeeCardContainer, Tags } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Amerciano} />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>


    </CoffeeCardContainer>
  )
}