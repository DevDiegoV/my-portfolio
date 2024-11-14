import React from "react"
import { ButtonsContainer, MyEmailText } from "./styles"
import Section from "../Section"
import { SectionText } from "../Section/styles"
import { useColorMode, IconButton } from "@chakra-ui/react"
import { useTheme } from "styled-components"

import { EmailIcon } from "@chakra-ui/icons"
import { LinkedInIcon } from "./components/LinkedInIcon"

const Contact = () => {
    const { colorMode } = useColorMode()
    const theme = useTheme()

    const handleEmail = () => {
        const recipient = "devdiegov@gmail.com"
        const subject = ""
        const body = "Olá!"
    
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`

        window.open(mailtoLink, "_blank")
      }

    const handleLinkedin = () => {
        const myLinkedin = "https://www.linkedin.com/in/diego-vieira-841569260/"
        window.open(myLinkedin, "_blank")
    }

    return (
        <Section id={"contact"} title={"Contato"}>
            <SectionText>
                Estou sempre em busca de novas oportunidades e parcerias! Se você tiver um projeto empolgante, uma proposta interessante ou quiser trocar ideias, 
                não hesite em me mandar uma mensagem. Será um prazer conversar e explorar como podemos colaborar. Opções para contato:
            </SectionText>
            <MyEmailText color={colorMode === "dark" ? theme.colors.dark.secondary : theme.colors.light.secondary}>
                devdiegov@gmail.com
            </MyEmailText>
            <ButtonsContainer>
                <IconButton
                    icon={<EmailIcon boxSize={"30px"}/>}
                    onClick={handleEmail}
                    padding={"10px"}
                    border={colorMode === "dark" ? `1px solid ${theme.colors.dark.primary}` : `1px solid ${theme.colors.light.primary}`}
                    borderRadius={"10px"}
                    bg={"transparent"}
                    color={colorMode === "dark" ? theme.colors.dark.primary : theme.colors.light.primary}
                    marginRight={"1rem"}
                />
                <IconButton
                    icon={<LinkedInIcon />}
                    onClick={handleLinkedin}
                    padding={"10px"}
                    border={colorMode === "dark" ? `1px solid ${theme.colors.dark.primary}` : `1px solid ${theme.colors.light.primary}`}
                    borderRadius={"10px"}
                    bg={"transparent"}
                    color={colorMode === "dark" ? theme.colors.dark.primary : theme.colors.light.primary}
                />
            </ButtonsContainer>       
        </Section>
    )
}

export default Contact