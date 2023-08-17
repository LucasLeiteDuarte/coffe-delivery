import { Button } from "../../../../components/Buttton";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/FormatMoney";
import { RegularText } from "../../../Home/components/intro/styles";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formatedItemstotal = formatMoney(cartItemsTotal);
  const formatedCartTotal = formatMoney(cartTotal);
  const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE);
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="S">Total de itens</RegularText>
        <RegularText>R$ {formatedItemstotal}</RegularText>
      </div>
      <div>
        <RegularText size="S">Entrega</RegularText>
        <RegularText>R$ {formatedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="L">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="L">
          R$ {formatedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" type="submit" />
    </ConfirmationSectionContainer>
  )
}