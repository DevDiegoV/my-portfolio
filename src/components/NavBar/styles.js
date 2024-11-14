import styled from "styled-components"

export const NavBarContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 25px 15px 15px;
  position: fixed;
  z-index: var(--chakra-zIndices-sticky);
`

export const NavBarText = styled.p`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: calc(8px + 1vmin);
  @media (max-width: 650px) {
    font-size: calc(10px + 1vmin);
  }
`

export const NavBarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  color: ${(props) => props.color};
`