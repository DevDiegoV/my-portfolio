import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 500px) {
    width: 90%;
    }
    @media (min-width: 501px) and (max-width: 1200px) {
        width: 70%;
    }
    align-items: center;
    margin-top: 4.5rem;
    margin-bottom: 8rem;
`

export const Title = styled.h1`
    color: ${(props) => props.color};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: calc(10px + 2vmin);
    width: 100%;
    text-align: center;
`

export const SectionText = styled.p`
    font-size: calc(10px + 1vmin);
    text-align: justify;
    margin-top: 1rem;
`