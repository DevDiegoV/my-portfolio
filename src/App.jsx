import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import theme from "./styles/theme.js"
import { ColorModeScript } from "@chakra-ui/react"
import MainPage from "./pages"

function App() {

  return (
    <ChakraProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <MainPage />
      </StyledThemeProvider>
    </ChakraProvider>
  )
}

export default App
