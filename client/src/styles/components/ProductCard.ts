import styled from "styled-components";
import { backgroundImage, flexCenter, fontSize14px, fontSize16px, fontSize20px } from "../mixin";

interface ProductCardProps {
  imageUrl: string;
}

export const ProductCardContainer = styled.div<ProductCardProps>`
  width: 19.4rem;
  height: auto;
  cursor: pointer;

  > .product-image {
    width: 100%;
    height: 21.7rem;
    object-fit: cover;
    position: relative;
    border-radius: 2rem;
    ${({ imageUrl }) => backgroundImage(imageUrl)};
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    .like-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      z-index: 1;
    }
  }

  > .product-details {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    align-items: center;

    > .productText{
        ${flexCenter("column" , "flex-start")};
        align-items: flex-start;
        row-gap: 0.25rem;

        > .product-title {
          ${fontSize16px};
        }

        > .product-category {
          ${fontSize14px};
        }
    }

    > .product-price {
      ${fontSize20px};
    }

  }

  > .rating {
    ${flexCenter("row" , "flex-start")};
    padding: 0rem 1.5rem;
    gap: 0.5rem;
  }
`