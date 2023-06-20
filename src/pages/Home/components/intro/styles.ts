import styled from "styled-components";
import introBack from "../../../../assests/IntroBack.png";



export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 34rem;

  background: ${()=> `url(${introBack}) no-repeat center`};
  background-size: cover;
  

`;
export const IntroContent= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
 

`;

interface TitleTextProps {
  color?: "title" | "subtitle" | "text";
  size?: "XL" | "L" | "M" | "S" | "XS"; 
  weight?: string | number;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({theme, color}) => theme.colors[`base-${color ?? "title" }`]};
  font-size: ${({theme, size}) => theme.textSizes[`title-title-${size ?? "M"}`]};
  font-family: ${({theme}) => theme.fonts.title};
  line-height: 130%;
  font-weight: ${({weight}) => weight ?? 800 }
`;

interface RegularTextProps {
  color?: "text" | "subtitle" | "label";
  size?: "L" | "M" | "S"; 
  weight?: string | number;
}

export const RegularText = styled.p<RegularTextProps>`
  color: ${({theme, color}) => theme.colors[`base-${color ?? "title" }`]};
  font-size: ${({theme, size}) => theme.textSizes[`text-regular-${size ?? "M"}`]};
  font-family: ${({theme}) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({weight}) => weight ?? 400 }
`;

export const IntroTitle = styled(TitleText)`
margin-bottom:1rem;
`;
  


