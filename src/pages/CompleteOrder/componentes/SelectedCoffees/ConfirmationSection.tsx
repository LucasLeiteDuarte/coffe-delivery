import { RegularText } from "../../../Home/components/intro/styles";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="S">Total de itens</RegularText>
        <RegularText>R$ 9,90</RegularText>
      </div>
    </ConfirmationSectionContainer>
  )
}