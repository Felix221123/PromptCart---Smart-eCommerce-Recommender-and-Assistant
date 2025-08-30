import styled from "styled-components";
import { flexCenter, fontSize14px, fontSize16px, fontSize18px, transitionHovers } from "../mixin";


export const ProductCardContainer = styled.div`
  width: 19.4rem;
  height: auto;
  cursor: pointer;

  > .product-image {
    position: relative;
    width: 100%;
    height: 21.7rem;
    border-radius: 2rem;

    .product-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      z-index: 99;

      &:hover {
        scale: 1.05;
        opacity: 0.8;
        ${transitionHovers};
      }
    }

    .like-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      z-index: 999;
      ${transitionHovers};
    }
  }

  > .product-details {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    align-items: center;
    gap: 1rem;

    > .productText{
        ${flexCenter("column" , "flex-start")};
        align-items: flex-start;
        row-gap: 0.25rem;

        > .product-title {
          ${fontSize16px};

          &:hover {
            ${transitionHovers};
            color: ${props => props.theme.colors.lightBlue};
          }
        }

        > .product-category {
          ${fontSize14px};
        }
    }

    > .product-price {
      ${fontSize18px};
    }

  }

  > .rating {
    ${flexCenter("row" , "flex-start")};
    padding: 0rem 1rem;
    gap: 0.5rem;
  }
`