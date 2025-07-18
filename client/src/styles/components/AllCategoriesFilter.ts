import styled from "styled-components";
import { flex, flexCenter, fontSize18px, transitionHovers } from "../mixin";
import CheckIcon from "../../assets/svg/check.svg"



export const AllCategoriesFilterContainer = styled.div`
  ${flex("column")};
  gap: 0.5rem;
`;


export const FilterContainer = styled.div`
  ${flex("column")};
  width: 17.82rem !important;
  height: 20.5rem !important;
  padding:1rem 0rem 1rem 0rem !important;
  overflow-y: auto;
  white-space: nowrap;
  ${transitionHovers};


  &::-webkit-scrollbar {
      width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.lightGreyish};
      border-radius: 5rem;
  }

  &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.greyishBlack};
      border-radius: 5rem;
  }

  > .scrollable {
    width: 100%;
    gap: 0.5rem;
    ${flexCenter("column", "flex-start")};
    align-items: flex-start;
  }
`;

export const EachCategoryContainer = styled.div`
  ${flex("row")};
  gap: 1rem;
  cursor: pointer;
  ${flexCenter("row", "flex-start")};
  align-items: flex-start;

  > input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.2rem;
    border: 1px solid hsl(231, 11%, 63%);
    cursor: pointer;
    position: relative;
    display: grid;
    place-items: center;

    &:hover {
        border-color: ${props => props.theme.colors.lightBlue};
    }

    &:checked {
      background-color: ${({ theme }) => theme.colors.lightBlue};
      border: none;
      ${transitionHovers};

      &::after {
        content: '';
        width: 100%;
        height:100%;
        background-color: white;
        mask: url(${CheckIcon}) no-repeat center;
        -webkit-mask: url(${CheckIcon}) no-repeat center;
        background-size: contain;
        display: block;
      }
    }

  }

  > .cat{
    ${fontSize18px};
    font-weight: 500;
  }
`;