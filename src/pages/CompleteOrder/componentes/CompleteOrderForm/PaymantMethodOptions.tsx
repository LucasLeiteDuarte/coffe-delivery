import { PaymentMethodInput } from './../PaymentMethodInput/index';
import { PaymentMethodOptionsContainer } from './styles';


export function PaymentMethodOptios() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  )
}