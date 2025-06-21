import styled from "styled-components";
import { fontSize15px, fontSize24px, fontSize36px } from "../mixin";


export const Heading = styled.div`
  color: ${props => props.theme.colors.darkShade};
  font-weight: 700;
  ${fontSize36px};
`;


export const SubHeading = styled.div`
  color: ${props => props.theme.colors.darkShade};
  font-weight: 600;
  ${fontSize24px};
`;


export const ParagraphStyle = styled.p`
  color: ${props => props.theme.colors.darkShade};
  font-weight: 400;
  ${fontSize15px};
`;