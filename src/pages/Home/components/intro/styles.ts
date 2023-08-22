import styled from "styled-components";
import introBackgroundImg from "../../../../assets/IntroBack.png";
import { TitleText } from "../../../../components/Typography";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) repeat center,
  ${theme.colors["base-background"]} 100%`};

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    margin-right: 10px;
  }

 @media (max-width: 1015px) {
    height: auto;
  }
  @media(max-width: 1015px){
  .container{
    flex-direction:column;
    text-align:center;}
  }
  @media(max-width: 1015px){
    img{
      order: -1;
    }
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
  
  @media (min-width: 769px) {
    gap: 2rem;
    margin-top: 4.125rem;
  }

`;