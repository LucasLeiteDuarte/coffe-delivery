
import introImg from "../../../../assests/intro-img.svg";
import { IntroContainer, IntroContent, IntroTitle, RegularText } from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="XL">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="L">
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>
        </div>
        <img src={introImg} />

      </IntroContent>
    </IntroContainer>
  )
}

