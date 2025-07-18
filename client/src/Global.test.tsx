// @ts-expect-error ignore the next line
import React from 'react'
import { describe, it } from 'vitest'
import App from './App'
import { render } from '@testing-library/react'

describe('App Component', () => {
  it('it should display the app', () => {
    render(<App />);
  })
})
