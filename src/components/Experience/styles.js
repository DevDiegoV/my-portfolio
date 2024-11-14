import styled from "styled-components"

export const CardText = styled.p`
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size};
`

export const FooterTextContainer = styled.div`
    background-color: ${(props) => props.bg};
    border-radius: 5px; 
    padding: 5px;
`

export const FooterText = styled.p`
    color: ${(props) => props.color};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    font-size: 12px;
`