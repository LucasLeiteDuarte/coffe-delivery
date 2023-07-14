import { PaymentMethodInput } from './../PaymentMethodInput/index';
import { PaymentMethodOptiosContainer } from "./styles";

export function PaymentMethodOptios() {
  return (
    <PaymentMethodOptiosContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptiosContainer>
  )
}