import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
// import { useShuffleQuestions } from '../../hooks'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'

import Button from '../ui/Button'
import { quizTopics } from '../../data/quizTopics'

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
`

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`

const QuizDetailsScreen = () => {
  const { quiz } = useParams() // Mova esta linha para dentro do componente funcional

  let quizTitle

  if (quiz === 'refrigeracao') {
    quizTitle = 'Refrigeração'
  } else if (quiz === 'eletrica') {
    quizTitle = 'Elétrica'
  } else {
    quizTitle = quiz // mantém o valor original se não for nenhum dos valores específicos
  }

  const { setCurrentScreen, quizDetails } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  // to shuffle or randomize quiz questions
  // useShuffleQuestions()

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <AppTitle>Teste de {quizTitle} Básica</AppTitle>
        <DetailTextContainer>
          <DetailText>
            Nome do Candidato:{' '}
            <HighlightedText>{localStorage.candidateName}</HighlightedText>
          </DetailText>
          <DetailText>
            Quantidade de Perguntas: <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Nota Máxima: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Tempo Total: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
          <DetailText>
            <br />
            <HighlightedText>Leia com Atenção:</HighlightedText>
            <p/>
            <br />
            No final da prova clique em{' '}
            <HighlightedText>Mostrar Resultado</HighlightedText> para verificar se passou
            no teste.
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Começar"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
