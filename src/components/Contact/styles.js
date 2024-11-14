import styled from "styled-components"

export const MyEmailText = styled.p`
    color: ${(props) => props.color};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    font-size: calc(10px + 1vmin);
    text-align: center;
    margin-top: 1rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
`