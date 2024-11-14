import React from "react"
import Section from "../Section"
import { SectionText } from "../Section/styles"

const AboutMe = () => {

    return (
        <Section id={"aboutMe"} title={"Sobre Mim"}>
            <SectionText>
                Tenho 21 anos, técnico em informática pela escola profissionalizante EEEP Jaime de Alencar e atualmente estou no terceiro semestre de Análise e Desenvolvimento 
                de Sistemas na Universidade de Fortaleza. Sou apaixonado por tecnologia desde a infância e, por isso, durante e após a escola, busquei me especializar em programação.
                <br/>
                Desenvolvedor focado em React e React Native com mais de 2 anos de experiência no mercado em uma Software House brasileira. 
                Tenho compreensão e habilidades para executar desenvolvimentos de APIs, aplicativos móveis e websites. Para design e estilização, conhecimento em Styled-components. 
                Familiaridade com Git Flow, além de práticas em metodologias ágeis e em cascata. 
                <br/>
                Meu objetivo é continuar me aperfeiçoando como desenvolvedor Front-end, expandindo minhas competências para o Back-end e contribuindo para projetos inovadores 
                que aprimorem a experiência dos usuários.
            </SectionText>
        </Section>
    )
}

export default AboutMe