import styled from "styled-components";
import { flexCenter, fontSize14px } from "../mixin";


export const ChatContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 4rem;
  z-index: 999;
  cursor: pointer;

  > .messageBox {
    ${flexCenter("column", "flex-start")};
    gap: 0.5rem;

    > .message {
      text-align: center;
      width: 10rem;
      border-radius: 0.5rem;
      padding: 0.25rem 1rem;
      background-color: ${props => props.theme.colors.greyishBlack};
      color: ${props => props.theme.colors.whiteClr};
      ${fontSize14px};
    }

    > img {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
    }
  }
`;