// @ts-expect-error ignore the next line
import React from 'react'
import './App.css'
import { theme } from "./styles/theme"
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="font-bold uppercase">hello world</div>
      </ThemeProvider>
    </>
  )
}

export default App
