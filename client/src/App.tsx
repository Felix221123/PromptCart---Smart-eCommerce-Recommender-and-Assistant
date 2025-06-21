// @ts-expect-error ignore the next line
import React from 'react'
import './App.css'
import theme from "./styles/theme"
import { ThemeProvider } from 'styled-components'
import { AppRoute } from './routes/AppRoute'






function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoute />
      </ThemeProvider>
    </>
  )
}

export default App
