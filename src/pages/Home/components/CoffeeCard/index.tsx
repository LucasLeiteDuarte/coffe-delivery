import Amerciano from "../../../../assests/CoffeeImg/Americano.png";
import { CoffeeCardContainer } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Amerciano} />
    </CoffeeCardContainer>
  )
}