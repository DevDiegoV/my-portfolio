import React from "react"
import { QuickAboutMeText, HeaderContainer, HeaderText, MyNameText, MyPhotoContent } from "./styles"
import { useTheme } from "styled-components"
import { useColorMode } from "@chakra-ui/react"

const Header = () => {
    const theme = useTheme();
    const { colorMode } = useColorMode()

    return (
        <HeaderContainer id="home">
            <HeaderText size={"calc(22px + 2vmin)"} weight={theme.fonts.weight.bold} >
                Olá!
            </HeaderText >
            <HeaderText size={"calc(20px + 2vmin)"} weight={theme.fonts.weight.bold} >
                Me chamo <MyNameText color={colorMode === "dark" ? theme.colors.dark.secondary : theme.colors.light.secondary}>Diego Vieira</MyNameText>.
            </HeaderText> 
            <MyPhotoContent borderColor={colorMode === "dark" ? theme.colors.dark.primary : theme.colors.light.primary} />
            <HeaderText 
                size={"calc(12px + 1vmin)"} 
                bottom={"10px"}
            >
                Desenvolvedor Full Stack
            </HeaderText> 
            <QuickAboutMeText>
                Possuo capacidade plena em React/React Native e entendimento de NodeJS Express/Django REST com mais de 2 anos de experiência.
                Técnico em informática e estudante de Análise e Desenvolvimento de Sistemas. Conhecimento em Git Flow, metodologias ágeis e Styled-components para design.
            </QuickAboutMeText>
        </HeaderContainer>
    )
}

export default Header