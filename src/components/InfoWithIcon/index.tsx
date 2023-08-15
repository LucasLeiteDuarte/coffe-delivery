import { ReactNode } from 'react'; // Importa o tipo ReactNode do React
import { IconContainer, InfoWithIconContainer } from "./styles"; // Importa os componentes estilizados

// Interface para as propriedades do componente InfoWithIcon
interface InfoWithIconProps {
  icon: ReactNode; // O ícone a ser exibido, que pode ser qualquer nó React
  text: string | ReactNode; // O texto a ser exibido, que pode ser uma string ou um nó React
  iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}
