import React from 'react'
import { ButtonProps } from '../../interface/ComponentProps'
import { AddToCartBtnStyle } from '../../styles/components/Button'
import AddToCartImg from "../../assets/svg/add-to-cart.svg"

export const AddToCart:React.FC<ButtonProps> = ({ onClick , className}) => {
  return (
    <>
      <AddToCartBtnStyle onClick={onClick} data-testid="add-to-cart" className={className}>
        <img src={AddToCartImg} alt="add to cart" />{" "}
        Add to Cart
      </AddToCartBtnStyle>
    </>
  )
}

