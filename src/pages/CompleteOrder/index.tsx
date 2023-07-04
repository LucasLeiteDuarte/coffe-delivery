import { CompleteOrderForm } from "./componentes/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
    </CompleteOrderContainer>
  )
}