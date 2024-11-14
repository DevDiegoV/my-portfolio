import { useColorMode, IconButton } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { useTheme } from "styled-components"

function ChangeThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  const theme = useTheme()

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <SunIcon boxSize={5} /> : <MoonIcon boxSize={5} />}
      bg={"transparent"}
      padding={"10px"}
      border={colorMode === "dark" ? `1px solid ${theme.colors.dark.primary}` : `1px solid ${theme.colors.light.primary}`}
      borderRadius={"10px"}
      color={colorMode === "dark" ? theme.colors.dark.primary : theme.colors.light.primary}
    />
  );
}

export default ChangeThemeButton;