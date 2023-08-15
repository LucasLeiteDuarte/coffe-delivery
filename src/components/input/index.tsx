import { forwardRef, InputHTMLAttributes } from "react"; // Importa a função forwardRef e as tipagens de atributos de input do React
import { RegularText } from "../../pages/Home/components/intro/styles";
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from "./styles";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

// O componente Input é definido com a função forwardRef para aceitar uma ref
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>

        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />

          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>

        {error && <RegularText size="S">{error}</RegularText>}
      </InputWrapper>
    );
  }
);
