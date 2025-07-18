// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '../utils/test-utils'
import { Input } from '../components/Common/Input'
import { screen } from '@testing-library/react'



describe('Cart Notification Component', () => {
  it('it should display the cart container with the count', () => {
    render(<Input type='text' placeholder='search' label='search' />);

    const input = screen.getByTestId("formGroup");

    expect(input).toBeInTheDocument();

  })

})