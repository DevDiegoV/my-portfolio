import React from "react"
import { FooterTextContainer, FooterText, CardText } from "./styles"
import Section from "../Section"
import { Card, CardHeader, CardBody, CardFooter, useColorMode, HStack, VStack, Image } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useTheme } from "styled-components"
import deway from "../../assets/img/deway.jpg"

const Experience = () => {
    const theme = useTheme()
    const { colorMode } = useColorMode()
    
    return (
        <Section id={"experience"} title={"Experiência"}>
            <Card 
                width={"100%"} 
                bg={colorMode === "dark" ? theme.colors.dark.bg : theme.colors.light.bg} 
                border={colorMode === "dark" ? `1px solid ${theme.colors.light.bg}` : null} 
                marginTop={"1rem"}
            >
                <CardHeader>
                    <HStack justifyContent={"space-between"}>
                        <Image 
                            src={deway} 
                            boxSize={"50px"} 
                            marginRight={"10px"}
                        />
                        <VStack align={"stretch"} width={"100%"}>
                            <HStack justifyContent={"space-between"}>
                                <CardText weight={theme.fonts.weight.bold} size={"calc(12px + 1vmin)"}>
                                    Deway LTDA.
                                </CardText>
                                <CardText weight={theme.fonts.weight.light} size={"14px"}>
                                    Set 2021 - Jul 2023
                                </CardText>
                            </HStack>
                            <CardText size={"14px"}>
                                Desenvolvedor Full Stack
                            </CardText>
                        </VStack>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <VStack align={"stretch"}>
                        <HStack>
                            <ArrowForwardIcon boxSize={4}/>
                            <CardText size={"16px"}>
                                Utilização de React e React Native para Front-end de sites e apps respectivamente.
                            </CardText>
                        </HStack>
                        <HStack>
                            <ArrowForwardIcon boxSize={4}/>
                            <CardText size={"16px"}>
                                Utilização de NodeJS e Django REST para Back-end de sites e apps respectivamente.
                            </CardText>
                        </HStack>
                        <HStack>
                            <ArrowForwardIcon boxSize={4}/>
                            <CardText size={"16px"}>
                                Desenvolvimento e horas contabilizadas em softwares como Teamwork.
                            </CardText>
                        </HStack>
                        <HStack>
                            <ArrowForwardIcon boxSize={4}/>
                            <CardText size={"16px"}>
                                Desenvolvimento com clean code, métodos ágeis e Git.
                            </CardText>
                        </HStack>
                        <HStack>
                            <ArrowForwardIcon boxSize={4}/>
                            <CardText size={"16px"}>
                                Desenvolvimento realizado com versionamento de projetos.
                            </CardText>
                        </HStack>
                        <HStack>
                            <ArrowForwardIcon boxSize={4}/>
                            <CardText size={"16px"}>
                                Deploy para Google Play e APPStore.
                            </CardText>
                        </HStack>
                        {/* <HStack>
                            <ArrowForwardIcon boxSize={4}/>
                            <CardText size={"16px"}>
                                Possuo código fonte e códigos desenvolvidos dos projetos.
                            </CardText>
                        </HStack> */}
                    </VStack>
                </CardBody>
                <CardFooter justifyContent={"right"}>
                    <FooterTextContainer bg={colorMode === "dark" ? theme.colors.dark.secondary : theme.colors.light.secondary}>
                        <FooterText color={colorMode === "dark" ? theme.colors.black : theme.colors.white}>
                            SOFTWARE HOUSE
                        </FooterText>
                    </FooterTextContainer>
                </CardFooter>
            </Card>
        </Section>
    )
}

export default Experience