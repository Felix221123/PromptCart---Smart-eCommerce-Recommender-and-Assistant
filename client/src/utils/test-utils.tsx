// src/testing/test-utils.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const customRender = (ui: React.ReactElement, options = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);


export { customRender as render }; // Override render function
