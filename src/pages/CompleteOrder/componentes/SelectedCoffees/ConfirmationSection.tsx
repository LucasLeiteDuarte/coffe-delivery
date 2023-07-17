import { RegularText } from "../../../Home/components/intro/styles";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="S">Total de itens</RegularText>
        <RegularText>R$ 9,90</RegularText>
      </div>
      <div>
        <RegularText size="S">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="L">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="L">
          R$ 29,90
        </RegularText>
      </div>
    </ConfirmationSectionContainer>
  )
}