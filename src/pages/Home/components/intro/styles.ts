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

  

 @media (max-width: 1024px) {
    height: auto;
  }
  @media(max-width: 1024px){
  .container{
    flex-direction:column;
    text-align:center;}
  }
  @media(max-width: 1024px){
    img{
      order: -1;
      width: 300px;
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
  
  

  @media (max-width: 1024px) {
    justify-items: center
    
  }
  @media (max-width: 500px) {
    gap: 2rem;
    margin-top: 4.125rem;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
  }

`;