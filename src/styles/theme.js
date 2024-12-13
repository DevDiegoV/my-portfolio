import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme ({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  
  fonts: {
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 600,
    },
  },

  colors: {
    light: {
      bg: "#fff",
      bg_secondary: "#f6f6f6",
      primary: "#111",
      secondary: "#005b96",
    },

    dark: {
      bg: "#111211",
      bg_secondary: "#111",
      primary: "#DFE1E5",
      secondary: "#00F700",
    },

    white: "#DFE1E5",
    black: "#111",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.bg" : "light.bg",
        color: props.colorMode === "dark" ? "dark.primary" : "light.primary",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "fonts.weight.regular",
      },
      header : {
        bg: props.colorMode === "dark" ? "dark.bg_secondary" : "light.bg_secondary",
      },
      footer: {
        bg: props.colorMode === "dark" ? "dark.bg_secondary" : "light.bg_secondary",
      },
    }),
  },
})

export default theme