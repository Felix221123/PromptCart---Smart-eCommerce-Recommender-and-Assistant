// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '../utils/test-utils'
import { CartNotification } from '../components/Common/CartNotif'
import { screen } from '@testing-library/react'



describe('Cart Notification Component', () => {
  it('it should display the cart container with the count', () => {
    render(<CartNotification count={1} />);

    const cart = screen.getByTestId("cart-notification");

    expect(cart).toBeInTheDocument();

    const cartCount = screen.getByText("1");

    expect(cartCount).toBeInTheDocument();

  })

})