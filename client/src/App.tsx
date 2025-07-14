// @ts-expect-error ignore the next line
import React from 'react'
import './App.css'
import theme from "./styles/theme"
import { ThemeProvider } from 'styled-components'
import { AppRoute } from './routes/AppRoute'
import { AuthProvider } from './context/users/AuthContext'





function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <AppRoute />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
