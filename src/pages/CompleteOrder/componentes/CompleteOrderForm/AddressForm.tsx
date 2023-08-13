import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/input";
import { AddressFormContainer } from "./styles";

export function AddresForm() {
  const { register } = useFormContext();
  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
      />
      <Input
        placeholder="Rua"
        className="street"
      />
      <Input
        placeholder="Número"
        className="number"
      />
      <div
        className="complement-input-container">
        <Input
          placeholder="Complemento"
          className="complement"
        />
        <span className="optional-text">
          <i>Opcional</i>
        </span>
      </div>
      <Input
        placeholder="Bairro"
      />
      <Input
        placeholder="Cidade"
      />
      <Input
        placeholder="UF"
      />
    </AddressFormContainer>
  )
}