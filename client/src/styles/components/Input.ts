import styled from "styled-components";
import { flex, fontSize15px, fontSize18px } from "../mixin";

export const FormGroup = styled.div`
  ${flex("column")};
  gap: 0.5rem;

  > label {
    color: ${props => props.theme.colors.darkShade};
    ${fontSize18px};
  }

  @media (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 26rem;
  }
`;


export const InputStyle = styled.input.attrs({})<React.InputHTMLAttributes<HTMLInputElement>>`
  border: 1.5px solid ${props => props.theme.colors.lightGreyish};
  outline: none;
  background-color: transparent;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  border-radius: 1rem;
  color: ${props => props.theme.colors.greyish};
  ${fontSize15px};

  &::placeholder {
    color: ${props => props.theme.colors.greyish};
  }

  &:focus , &:active {
    border-color: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.darkShade};
  }
`;

