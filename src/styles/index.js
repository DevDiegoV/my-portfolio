import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, span, p {
        font-family: ${({ theme }) => theme.fonts.primary};
        color: ${({ theme }) => theme.text.primary_dark};
    }
`
