
import { CoffeeCard } from "../CoffeeCard";
import { TitleText } from "../intro/styles";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="L" color="subtitle">
        Nossos Cafés
      </TitleText>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />

      </CoffeeList>


    </OurCoffeesContainer>

  )
}