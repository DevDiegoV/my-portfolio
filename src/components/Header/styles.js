import styled from "styled-components"
import img from "../../assets/img/my_photo.jpg"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    padding: 25% 0% 25% 0%;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    padding: 15% 0% 15% 0%;
  }
  padding: 10% 0% 10% 0%;
`

export const HeaderText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-bottom: ${(props) => props.bottom};
`

export const MyNameText = styled.span`
  font-size: calc(22px + 2vmin);
  color: ${(props) => props.color};
`

export const QuickAboutMeText = styled.p`
  font-size: calc(10px + 1vmin);
  text-align: justify;
  width: 50%;
  @media (max-width: 500px) {
  width: 90%;
  }
  @media (min-width: 501px) and (max-width: 1200px) {
      width: 70%;
  }
`

export const MyPhotoContent = styled.div`
  border-radius: 50%;
  border: 2px solid ${(props) => props.borderColor};
  background-image: url(${img});
  background-size: cover;
  width: 250px;
  height: 250px;
  margin-top: 40px;
  margin-bottom: 40px;
`