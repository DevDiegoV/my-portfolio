import React, { useState } from "react"
import { NavBarContainer, NavBarText, NavBarButton } from "./styles"
import { HStack, useMediaQuery, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, useColorMode, Button } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import ChangeThemeButton from "./components/ChangeThemeButton";
import { useTheme } from "styled-components";

const NavBar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode()
  const theme = useTheme()

  const scrollToHome = () => {
    const header = document.querySelector("#home")
    header.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAboutMe = () => {
    const aboutMeSection = document.querySelector("#aboutMe")
    aboutMeSection.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience")
    experienceSection.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    projectsSection.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const modalContentStyle = {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    paddingTop: "10px", 
    paddingBottom: "10px",
  }

    return (
            <NavBarContainer>      
                <Button variant="ghost" onClick={scrollToHome}>
                    <NavBarText>
                        Home
                    </NavBarText>
                </Button>
                {isLargerThan768 ?
                    <HStack spacing={"25px"}>
                        <Button variant="ghost" onClick={scrollToAboutMe} >
                            <NavBarText>
                                Sobre
                            </NavBarText>
                        </Button>
                        <Button variant="ghost" onClick={scrollToExperience}>
                            <NavBarText>
                                Experiência
                            </NavBarText>
                        </Button>
                        <Button variant="ghost" onClick={scrollToProjects}>
                            <NavBarText>
                                Projetos
                            </NavBarText>
                        </Button>
                        <Button variant="ghost" onClick={scrollToContact} >
                            <NavBarText>
                                Contato
                            </NavBarText>
                        </Button>
                        <ChangeThemeButton />
                    </HStack>
                    :
                    <HStack spacing={"20px"}>
                        <ChangeThemeButton />
                        <NavBarButton color={colorMode === "dark" ? theme.colors.dark.primary : theme.colors.light.primary} onClick={onOpen}>
                            <HamburgerIcon boxSize={5} />
                        </NavBarButton>
                    </HStack>
                }
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody bg={colorMode === "dark" ? theme.colors.dark.bg : theme.colors.light.bg}>
                            <HStack spacing={"30px"} style={modalContentStyle}>
                                <Button variant="ghost" onClick={() => {
                                    onClose()
                                    scrollToAboutMe()
                                }}>
                                    <NavBarText>
                                        Sobre
                                    </NavBarText>
                                </Button>
                                <Button variant="ghost" onClick={() => {
                                    onClose()
                                    scrollToExperience()
                                }}>
                                    <NavBarText>
                                        Experiência
                                    </NavBarText>
                                </Button>
                                <Button variant="ghost" onClick={() => {
                                    onClose()
                                    scrollToProjects()
                                }}>
                                    <NavBarText>
                                        Projetos
                                    </NavBarText>
                                </Button>
                                <Button variant="ghost" onClick={() => {
                                    onClose()
                                    scrollToContact()
                                }}>
                                    <NavBarText>
                                        Contato
                                    </NavBarText>
                                </Button>
                            </HStack>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </NavBarContainer>
    )
}

export default NavBar