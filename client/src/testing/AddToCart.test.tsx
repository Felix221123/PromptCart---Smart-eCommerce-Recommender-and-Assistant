// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '../utils/test-utils'
import { AddToCart } from '../components/Button/AddToCart'
import { screen  } from '@testing-library/react'


describe('Add to Cart Component', () => {
  it('it should display the button with the text', () => {
    render(<AddToCart onClick={() => { }} />);

    const addToCartButton = screen.getByTestId("add-to-cart");

    expect(addToCartButton).toHaveTextContent("Add to Cart");
  })
})