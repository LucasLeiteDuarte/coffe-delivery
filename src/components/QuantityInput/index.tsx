import { Minus, Plus } from "phosphor-react"; // Importa os ícones de menos e mais do pacote Phosphor React
import { IconWrapper, QuantityInputContainer } from "./styles"; // Importa os componentes estilizados

// Interface para as propriedades do componente QuantityInput
interface QuantityInputProps {
  size?: "medium" | "small"; // Tamanho do componente ("medium" ou "small")
  quantity: number; // Quantidade atual
  onDecrease: () => void; // Função chamada ao diminuir a quantidade
  onIncrease: () => void; // Função chamada ao aumentar a quantidade
}

// O componente QuantityInput recebe as propriedades definidas na interface QuantityInputProps
export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      {/* Wrapper para o ícone de diminuir quantidade */}
      <IconWrapper onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>

      {/* Input numérico exibindo a quantidade atual */}
      <input type="number" value={quantity} />

      {/* Wrapper para o ícone de aumentar quantidade */}
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
