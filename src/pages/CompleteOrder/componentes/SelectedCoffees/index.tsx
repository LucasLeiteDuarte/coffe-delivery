import { TitleText } from "../../../Home/components/intro/styles";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="XS" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <p>Itens</p>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}