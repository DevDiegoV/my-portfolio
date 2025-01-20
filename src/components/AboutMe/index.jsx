import React from "react"
import Section from "../Section"
import { SectionText } from "../Section/styles"

const AboutMe = () => {

    return (
        <Section id={"aboutMe"} title={"Sobre Mim"}>
            <SectionText>
                Tenho 22 anos, técnico em informática pela escola profissionalizante EEEP Jaime Alencar de Oliveira e sou graduado em Análise e Desenvolvimento de Sistemas na 
                Universidade de Fortaleza. Sou apaixonado por tecnologia desde a infância e, por isso, durante e após a escola, busquei me especializar em programação.
                <br/>
                Desenvolvedor Full Stack com mais de 4 anos de experiência no mercado, experiente em React e React Native para Front-end e com conhecimento em Node.js e Django 
                para Back-end. Experiente no desenvolvimento de APIs, aplicativos móveis e websites, com habilidades para criar soluções completas e escaláveis. 
                Para design e estilização, possuo expertise em Styled-components e ferramentas modernas de CSS. Familiaridade com Git Flow, além de práticas em metodologias ágeis 
                e em cascata, garantindo entregas eficientes e colaborativas.
                <br/>
                Meu objetivo é continuar me aperfeiçoando como desenvolvedor Full Stack, aprofundando minhas competências em tecnologias de Front-end e Back-end, 
                e contribuindo para projetos inovadores que proporcionem experiências excepcionais aos usuários.
            </SectionText>
        </Section>
    )
}

export default AboutMe