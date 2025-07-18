// @ts-expect-error ignore the next line
import React from 'react'
import './App.css'
import theme from "./styles/theme"
import { ThemeProvider } from 'styled-components'
import { AppRoute } from './routes/AppRoute'
import { AuthProvider } from './context/users/AuthContext'
import { ProductProvider } from './context/products/ProductContext'




function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <ThemeProvider theme={theme}>
            <AppRoute />
          </ThemeProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  )
}

export default App
