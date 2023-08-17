import styled from "styled-components";
import { RegularText, TitleText } from "../intro/styles";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  padding: 1.25rem;
  padding-top: 0;

  background: ${({theme})=> theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;

  img {
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
  }
`;

export const Tags = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;

  span{
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  text-transform: uppercase;

  background: ${({theme})=> theme.colors["brand-yellow-light"]};
  color: ${({theme})=> theme.colors["brand-yellow-dark"]};
  font-size: ${({theme})=> theme.textSizes["components-tag"]}
  }
`;

export const Name = styled(TitleText).attrs({
  size:"S",
  color: "subtitle",
  weight: "700",
})`
  margin-bottom: 0.5rem;
`;

export const Description = styled(RegularText).attrs({
  size:"S",
  color: "label",

})`
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

> div{
    display: flex;
    align-items: center;
    gap: 3px;

    p{
      line-height: 0.75rem;
    }
}
`;
export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.375rem;
    height: 2.375rem;

    border: none;
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: .4s;

    background: ${({theme})=>theme.colors["brand-purple-dark"]};
    color: ${({theme})=>theme.colors["base-card"]} ;

    &:hover{
      background: ${({theme})=> theme.colors["brand-purple"]};
    }
  }
`;