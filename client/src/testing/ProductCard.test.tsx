// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '../utils/test-utils'
import { ProductCard } from '../components/Common/ProductCard'
import { screen } from '@testing-library/react'



describe('Cart Notification Component', () => {
  it('it should display the cart container with the count', () => {
    render(<ProductCard />);

    const productCard = screen.getByTestId("product-card");

    expect(productCard).toBeInTheDocument();
  })

})