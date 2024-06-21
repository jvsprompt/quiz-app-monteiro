import { FC } from 'react'
import styled from 'styled-components'

interface QuizImageProps {
  image: string
}

const ImageStyle = styled.img`
  border-radius: 10px;
  max-height: 100%;
  max-width: 100%;
  // box-shadow: 4px 4px 2px ${({ theme }) => theme.colors.themeColor};
  margin-bottom: 20px;
`

const QuizImage: FC<QuizImageProps> = ({ image }) => (
  <ImageStyle src={image} alt="picture quiz" />
)

export default QuizImage
