import styled from "styled-components";
import { flexCenter, fontSize14px, fontSize18px, transitionHovers } from "../mixin";

export const BotContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 4rem;
  z-index: 9;
  cursor: pointer;

  > .messageBox {
    ${flexCenter("column", "flex-start")};
    gap: 0.5rem;

    > .message {
      text-align: center;
      width: 10rem;
      border-radius: 0.5rem;
      padding: 0.25rem 0.5rem;
      background-color: black;
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

export const ChatContainer = styled.div`
  width: 85%;
  height: 80%;
  margin: 0 auto;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  cursor: pointer;
  border-radius: 2rem 0rem 2rem 2rem;
  background:
  linear-gradient(
    to top,
    rgba(255, 134, 225, 0.2) 0%,
    rgba(137, 188, 255, 0.2) 30%,
    rgba(86, 99, 126, 0.1) 70%,
    rgba(255, 255, 255, 0) 100%
  ),
  #ffffff;

  > .closeBtn {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    position: fixed;
    pointer-events: auto;
    top: 1rem;
    right: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  position: relative;
  border-radius: 50%;
  ${flexCenter("column", "center")};

  > img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }

  &:hover, &:active {
    background-color: ${props => props.theme.colors.lightGreyish};
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }
`


export const ChatFooter = styled.div`
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  width: 100%;
  z-index: 200;
  pointer-events: none; 
  
  .attachments-floater {
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(3.25rem + 8px); 
    pointer-events: auto;
    width: 65%;
    margin: 0 auto;
  }
`;



export const ChatInput = styled.div`
  ${flexCenter("row", "space-between")};
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid black;
  border-radius: 5rem;
  position: relative;
  pointer-events: auto;
  margin: 0 auto;
  bottom: 1rem;
  width: 75%;
  height: 4.5rem;


  > div.file {
    position: absolute;
    left: 1%;
    top: 10%;
  }

  > div.microphone {
    position: absolute;
    right: 9%;
    top: 10%;
    cursor: pointer;
  }
  > div.send {
    position: absolute;
    right: 5%;
    top: 10%;
    cursor: pointer;
  }

  > input {
    width: 85%;
    padding: 0.75rem 0.75rem 0.75rem 3.5rem;
    border-radius: 5rem;
    outline: none;
    background-color: transparent;
    ${fontSize18px};
    color: ${props => props.theme.colors.greyishBlack};
  }
`;

export const ConversationContainer = styled.div`
  ${flexCenter("column", "flex-start")};
  background-color: transparent;
  width: 100% !important;
  height: calc(80% - 4.5rem - 2rem);
  padding-top: 2rem;
  overflow-y: auto;
  ${transitionHovers};
  position: relative;


  &::-webkit-scrollbar {
      width: 0.25rem !important;
  }

  &::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.lightGreyish} !important;
      border-radius: 5rem !important;
  }

  &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.greyishBlack} !important;
      border-radius: 5rem !important;
  }

  > .scrollableContainer {
    box-sizing: border-box;
    width: 100%;
    gap: 1.5rem;
    padding: 0.5rem 5%;
    ${flexCenter("column", "flex-start")};

    > .userMessageBox{
      ${flexCenter("column", "flex-end")};
      width: fit-content;
      align-self: flex-end;
      align-items: flex-end;
      gap: 0.25rem;
      max-width: 70%;
      background: transparent;
      height: auto;
      padding: 1rem 1rem;
      border-radius: 1rem 0rem 1rem 1rem;

      > .message {
        ${flexCenter("row", "flex-end")};
        background: ${props => props.theme.colors.lightGreyish};
        width: fit-content;
        align-self: flex-end;
        align-items: flex-end;
        height: auto;
        padding: 1rem 1rem;
        border-radius: 1rem 0rem 1rem 1rem;
      }
    }

    > .aiContainer{
      ${flexCenter("row", "flex-start")};
      gap: 0.5rem;
      width: fit-content;
      align-self: flex-start;
      align-items: flex-start;
      max-width: 85% !important;
      height: auto;
      padding: 1rem 1rem;
      border-radius: 0rem 1rem 1rem 1rem;

      > .message{
        ${flexCenter("row", "flex-start")};
        gap: 0.5rem;

        .typing {
          display: inline-flex;
          gap: 6px;
          align-items: center;
          height: 18px;
        }

        .typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #56637E; /* use your token color */
          opacity: .4;
          animation: typing-bounce 1.2s infinite ease-in-out;
        }

        .typing span:nth-child(2) { animation-delay: .15s; }
        .typing span:nth-child(3) { animation-delay: .30s; }

        @keyframes typing-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: .35; }
          40% { transform: translateY(-3px); opacity: 1; }
        }

      }
    }

    > .aiContainer,
    > .userMessageBox {
      word-wrap: break-word;
      word-break: break-word;
      white-space: pre-wrap;  /* keeps newlines, but wraps long words */
    }

  }
`;