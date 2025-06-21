import React from 'react'
import { ButtonProps } from '../../interface/ComponentProps'
import { AddToCartBtnStyle } from '../../styles/components/Button'
import AddToCartImg from "../../assets/svg/add-to-cart.svg"

export const AddToCart:React.FC<ButtonProps> = ({ onClick}) => {
  return (
    <>
      <AddToCartBtnStyle onClick={onClick}>
        <img src={AddToCartImg} alt="add to cart" />{" "}
        Add to Cart
      </AddToCartBtnStyle>
    </>
  )
}

