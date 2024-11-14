import React from "react"
import { Container, Title } from "./styles"
import { Divider, HStack, useColorMode } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useTheme } from "styled-components"

const Section = (props) => {
    const { colorMode } = useColorMode()
    const theme = useTheme()

    return (
        <Container 
            id={props.id} 
            as={motion.div} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <HStack width={"100%"}>
                <Divider />
                <Title color={colorMode === "dark" ? theme.colors.dark.secondary : theme.colors.light.secondary}>
                    {props.title}
                </Title>
                <Divider />
            </HStack>
            {props.children}
        </Container>
    )
}

export default Section