import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../Home/components/intro/styles";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>

        <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/8064074-copo-de-cafe-quente-icone-de-cafe-isolado-em-fundo-branco-copo-cafe-ilustracao-sinal-simples-vetor.jpg" alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional </RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>
        R$ 9,90
      </p>
    </CoffeeCartCardContainer>
  )
}