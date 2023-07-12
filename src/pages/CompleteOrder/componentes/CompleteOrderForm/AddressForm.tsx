import { Input } from "../../../../components/input";
import { AddressFormContainer } from "./styles";

export function AddresForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" className="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  )
}