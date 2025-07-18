import React from 'react'
import { CartNotificationProps } from '../../interface/ComponentProps'
import { CartNotificationStyle, CartCountContainer } from '../../styles/components/CartNotif'
import CartImg from "../../assets/svg/cart.svg"


export const CartNotification: React.FC<CartNotificationProps> = ({ count }) => {
  return (
    <>
      <CartNotificationStyle data-testid="cart-notification">
        <img src={CartImg} alt="cart" />
        {count > 0 && <CartCountContainer>{count}</CartCountContainer>}
      </CartNotificationStyle>
    </>
  )
}

