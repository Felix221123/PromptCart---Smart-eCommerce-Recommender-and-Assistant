import styled from "styled-components";
import { flexCenter, fontSize15px, fontSize18px } from "../mixin";

export const FormGroup = styled.div`
  ${flexCenter("column", "flex-start")};
  align-items: flex-start;
  gap: 0.5rem;

  > label {
    color: ${props => props.theme.colors.darkShade};
    ${fontSize18px};
  }
`;


export const InputStyle = styled.input`
  border: 1.5px solid ${props => props.theme.colors.lightGreyish};
  outline: none;
  background-color: transparent;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  border-radius: 1rem;
  color: ${props => props.theme.colors.greyish};
  ${fontSize15px};

  @media (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 22rem;
  }

  &::placeholder {
    color: ${props => props.theme.colors.greyish};
  }

  &:focus , &:active {
    border-color: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.darkShade};
  }
`;
