import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";


interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number; // Quantidade atual
  onDecrease: () => void;
  onIncrease: () => void;
}


export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>

      <IconWrapper onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>

      <input type="number" value={quantity} />

      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
