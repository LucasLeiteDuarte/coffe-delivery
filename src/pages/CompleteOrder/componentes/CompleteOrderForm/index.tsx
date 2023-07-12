import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../Home/components/intro/styles";
import { SectionTitle } from "../SectionTitle/inde";
import { AddresForm } from "./AddressForm";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

export function CompleteOrderForm() {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size="XS" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
        />
        <AddresForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}