import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import introImg from "../../../../assets/intro-img.svg";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { RegularText } from "../../../../components/Typography";
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle, } from "./styles";

export function Intro() {
  const { colors } = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size={isMobile ? "l" : "xl"}>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size={isMobile ? "m" : "l"}>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />

          </BenefitsContainer>
        </div>
        <img src={introImg} />

      </IntroContent>
    </IntroContainer>
  )
}

