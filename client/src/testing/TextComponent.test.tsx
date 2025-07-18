// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '../utils/test-utils'
import { Header } from '../components/Text/Header'
import { screen } from '@testing-library/react'
import { SubHeader } from '../components/Text/SubHeader'
import { Paragraph } from '../components/Text/Paragraph'

describe('Header Component', () => {
  it('it should display the header text', () => {
    render(<Header text="Login" />);

    const header = screen.getByTestId("header");

    expect(header).toHaveTextContent("Login");
  })

})


describe('Sub Heading Component', () => {
  it('it should display the sub heading text', () => {
    render(<SubHeader text="Login" />);

    const subHeader = screen.getByTestId("sub-header");

    expect(subHeader).toHaveTextContent("Login");
  })

})
describe('Paragraph Component', () => {
  it('it should display the paragraph text', () => {
    render(<Paragraph text="login into your account" />);

    const paragraph = screen.getByTestId("paragraph");

    expect(paragraph).toHaveTextContent("login into your account");
  })

})

