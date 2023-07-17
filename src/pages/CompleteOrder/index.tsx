import { CompleteOrderForm } from "./componentes/CompleteOrderForm";
import { SelectedCoffees } from "./componentes/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  )
}