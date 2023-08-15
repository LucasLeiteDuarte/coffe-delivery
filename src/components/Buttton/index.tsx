import { ButtonHTMLAttributes } from "react"; // Importa a tipagem para atributos de botão do React
import { ButtonContainer } from "./styles"; // Importa o componente estilizado do botão

// Interface para as propriedades do botão
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number; // Texto exibido no botão, que pode ser uma string ou número
}

// O componente "Button" recebe as propriedades definidas na interface "ButtonProps"
export function Button({ text, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>{text}</ButtonContainer>
    // Renderiza o componente estilizado do botão ("ButtonContainer") com as propriedades e texto fornecidos
  );
}
