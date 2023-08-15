import { forwardRef, InputHTMLAttributes } from "react"; // Importa a função forwardRef e as tipagens de atributos de input do React
import { RegularText } from "../../pages/Home/components/intro/styles"; // Importa o componente estilizado RegularText
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from "./styles"; // Importa os componentes estilizados

// Define as propriedades do componente Input
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string; // Mensagem de erro
  rightText?: string; // Texto à direita do input
};

// O componente Input é definido com a função forwardRef para aceitar uma ref
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        {/* Renderiza o input estilizado */}
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {/* Renderiza o texto à direita do input, se fornecido */}
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {/* Renderiza a mensagem de erro, se houver */}
        {error && <RegularText size="S">{error}</RegularText>}
      </InputWrapper>
    );
  }
);
