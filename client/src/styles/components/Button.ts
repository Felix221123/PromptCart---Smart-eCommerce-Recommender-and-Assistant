import styled from "styled-components";
import { ButtonStyle, flexCenter, fontSize14px, fontSize16px } from "../mixin";


export const AuthButtonStyle = styled.button`
  ${ButtonStyle("0.75rem 6.5rem" , "5rem" , "500")};
  background-color: ${props => props.theme.colors.darkShade};
  color: ${props => props.theme.colors.whiteClr};
  ${flexCenter("column" , "center")};
  ${fontSize16px};

  &:hover {
    opacity: 0.85;
  }
`;


export const AddToCartBtnStyle = styled.button`
  ${ButtonStyle("0.75rem 2rem" , "5rem" , "500")};
  background-color: ${props => props.theme.colors.darkShade};
  color: ${props => props.theme.colors.whiteClr};
  ${flexCenter("row" , "center")};
  ${fontSize14px};
  gap: 0.5rem;

  &:hover {
    opacity: 0.85;
  }
`;