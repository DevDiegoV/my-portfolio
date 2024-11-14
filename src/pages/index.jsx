import React from "react"
import NavBar from "../components/NavBar"
import { Container, Sections } from "./styles"
import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
 
const MainPage = () => {
    return (
        <Container>
            <NavBar />
                <Sections>
                    <Header />
                    <AboutMe />
                    <Experience />
                    <Projects />
                    <Contact />
                </Sections>
            <Footer />
        </Container>
    )
}

export default MainPage