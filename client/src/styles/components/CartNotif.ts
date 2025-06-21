import { flexCenter, fontSize12px } from '../mixin';
import styled from "styled-components";


export const CartNotificationStyle = styled.div`
  position: relative;
  display: inline-block;


  > img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const CartCountContainer = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.whiteClr};
  ${flexCenter("column", "center")};
  ${fontSize12px};
`;