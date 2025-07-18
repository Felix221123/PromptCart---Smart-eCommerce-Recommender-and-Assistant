// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '../utils/test-utils'
import { AuthButton } from '../components/Button/AuthButton'
import { screen } from '@testing-library/react'



describe('Auth Button Component', () => {
  it('it should display the auth button', () => {
    render(<AuthButton text="Login" onClick={() => { }} />);

    const authButton = screen.getByTestId("auth-button");

    expect(authButton).toHaveTextContent("Login");
  })

})