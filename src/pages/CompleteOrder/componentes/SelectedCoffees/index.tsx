import { TitleText } from "../../../Home/components/intro/styles";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="XS" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}