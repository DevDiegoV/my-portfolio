import React from "react"
import Section from "../Section"
import { CardText } from "./styles"
import { Card, CardHeader, CardBody, useColorMode, HStack, Image, CardFooter, Link } from "@chakra-ui/react"
import { useTheme } from "styled-components"
import epi from "../../assets/img/epi_icon.jpg"
import usibras from "../../assets/img/usibras_icon.jpg"
import corpvs from "../../assets/img/corpvs_icon.jpg"
import { FooterTextContainer, FooterText } from "../Experience/styles"

const Projects = () => {
    const theme = useTheme()
    const { colorMode } = useColorMode()

    return (
        <Section id={"projects"} title={"Projetos"}>
            <Card 
                width={"100%"} 
                bg={colorMode === "dark" ? theme.colors.dark.bg : theme.colors.light.bg} 
                border={colorMode === "dark" ? `1px solid ${theme.colors.light.bg}` : null} 
                marginTop={"1rem"}
                marginBottom={"2rem"}
            >
                <CardHeader>
                    <HStack>
                        <Image 
                            src={epi} 
                            boxSize={"40px"} 
                            borderRadius={"10px"}
                            marginRight={"5px"}
                        />
                        <CardText weight={theme.fonts.weight.bold} size={"calc(14px + 1vmin)"}>
                            Epicont
                        </CardText>         
                        <Link href={"https://apps.apple.com/il/app/epicont/id1568169208?platform=iphone"} target={"_blank"}>
                            <CardText weight={theme.fonts.weight.light} size={"calc(8px + 1vmin)"} style={{marginTop: 3}}>
                                (Link)
                            </CardText>
                        </Link>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <CardText size={"16px"} align={"justify"}>
                        O Epicont é um aplicativo desenvolvido pela AGROVEST Indústria para digitalizar o controle de Equipamentos de Proteção Individual (EPI). 
                        Ele permite que os funcionários assinem digitalmente as fichas de controle de EPI diretamente no aplicativo, integrando essas informações 
                        a um sistema web para facilitar a gestão e o rastreamento das entregas dos EPIs, por atividade e por funcionário.
                    </CardText>
                </CardBody>
                <CardFooter justifyContent={"right"}>
                    <FooterTextContainer bg={colorMode === "dark" ? theme.colors.dark.secondary : theme.colors.light.secondary}>
                        <FooterText color={colorMode === "dark" ? theme.colors.black : theme.colors.white}>
                            DEWAY
                        </FooterText>
                    </FooterTextContainer>
                </CardFooter>
            </Card>

            <Card 
                width={"100%"} 
                bg={colorMode === "dark" ? theme.colors.dark.bg : theme.colors.light.bg} 
                border={colorMode === "dark" ? `1px solid ${theme.colors.light.bg}` : null} 
                marginTop={"1rem"}
                marginBottom={"2rem"}
            >
                <CardHeader>
                    <HStack>
                        <Image 
                            src={usibras} 
                            boxSize={"40px"} 
                            borderRadius={"10px"}
                            marginRight={"5px"}
                        />
                        <CardText weight={theme.fonts.weight.bold} size={"calc(14px + 1vmin)"}>
                            AGROFAN
                        </CardText>
                        <Link href={"https://play.google.com/store/apps/details?id=br.com.deway.usibras&hl=pt_BR"} target={"_blank"}>
                            {/* <CardText weight={theme.fonts.weight.light} size={"calc(8px + 1vmin)"} style={{marginTop: 3}}>
                                (Link)
                            </CardText> */}
                        </Link>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <CardText size={"16px"} align={"justify"}>
                        O Agrofan é um aplicativo desenvolvido pela Usibras voltado para produtores de castanha. Ele permite que os usuários façam solicitações 
                        relacionadas ao cultivo, como pedidos de sementes, mudas, e acompanhamento de práticas agrícolas. O app também oferece funcionalidades para 
                        controle de pragas, adubação, manejo de solo, e monitoramento de colheita, facilitando a rastreabilidade e gestão das atividades no campo.
                    </CardText>
                </CardBody>
                <CardFooter justifyContent={"right"}>
                    <FooterTextContainer bg={colorMode === "dark" ? theme.colors.dark.secondary : theme.colors.light.secondary}>
                        <FooterText color={colorMode === "dark" ? theme.colors.black : theme.colors.white}>
                            DEWAY
                        </FooterText>
                    </FooterTextContainer>
                </CardFooter>
            </Card>

            <Card 
                width={"100%"} 
                bg={colorMode === "dark" ? theme.colors.dark.bg : theme.colors.light.bg} 
                border={colorMode === "dark" ? `1px solid ${theme.colors.light.bg}` : null} 
                marginTop={"1rem"}
            >
                <CardHeader>
                    <HStack>
                        <Image 
                            src={corpvs} 
                            boxSize={"40px"} 
                            borderRadius={"10px"}
                            marginRight={"5px"}
                        /> 
                        <CardText weight={theme.fonts.weight.bold} size={"calc(14px + 1vmin)"}>
                            Corpvs Rastreamento
                        </CardText>
                        <Link href={"https://play.google.com/store/apps/details?id=corpvs.com.br.gsmob"} target={"_blank"}>
                            <CardText weight={theme.fonts.weight.light} size={"calc(8px + 1vmin)"} style={{marginTop: 3}}>
                                (Link)
                            </CardText>
                        </Link>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <CardText size={"16px"} align={"justify"}>
                        O Corpvs Rastreamento é um aplicativo desenvolvido pela Corpvs Segurança destinado exclusivamente para clientes do serviço de rastreamento da empresa. 
                        O app permite o monitoramento de veículos em tempo real, com funcionalidades como ativar/desativar notificações, histórico detalhado de trajetos, 
                        visualização em mapa híbrido ou padrão, estatísticas do veículo, e funções como âncora e compartilhamento de localização. Ele também possibilita o 
                        gerenciamento de boletos, envio de mensagens e acompanhamento de promoções da empresa.
                    </CardText>
                </CardBody>
                <CardFooter justifyContent={"right"}>
                    <FooterTextContainer bg={colorMode === "dark" ? theme.colors.dark.secondary : theme.colors.light.secondary}>
                        <FooterText color={colorMode === "dark" ? theme.colors.black : theme.colors.white}>
                            DEWAY
                        </FooterText>
                    </FooterTextContainer>
                </CardFooter>
            </Card>
        </Section>
    )
}

export default Projects