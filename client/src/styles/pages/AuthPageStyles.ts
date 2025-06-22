import styled from "styled-components";
import { flex, flexCenter } from "../mixin";



export const AuthPageContainer = styled.div`
  width: 100%;
  ${flex("column")};
  gap: 2rem;
  margin-top: 4rem;

`;



export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  ${flexCenter("column" , "center")};
  gap: 1rem;

  @media (min-width: 768px) {
    ${flexCenter("column" , "center")};
  }

  @media (max-width: 767px) {
    margin:0 auto;
  }
`;