import Tradicional from "../../../../assests/CoffeeImg/Expresso.png";
import { RegularText } from "../intro/styles";
import { TitleText } from './../intro/styles';
import { CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Tradicional} />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <Name> Expresso Tradicional </Name>
      <Description> O tradicional café feito com água que e grãos moídos</Description>
      <CardFooter>
        <div>
          <RegularText size="S">R$</RegularText>
          <TitleText size="M" color="text"> 9,90 </TitleText>
        </div>
      </CardFooter>


    </CoffeeCardContainer>
  )
}