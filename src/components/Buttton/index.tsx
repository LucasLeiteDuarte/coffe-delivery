import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number; // Texto exibido no botão, que pode ser uma string ou número
}


export function Button({ text, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>{text}</ButtonContainer>

  );
}
