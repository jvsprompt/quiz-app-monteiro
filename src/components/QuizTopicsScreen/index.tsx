import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { AppLogo } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { quizTopics } from '../../data/quizTopics'
import { device } from '../../styles/BreakPoints'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 1700;
  margin-bottom: 20px;
  text-align: center;
`

const DetailText = styled.p`
  font-weight: 1500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`

const SelectButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 45px;
  @media ${device.md} {
    row-gap: 20px;
    column-gap: 20px;
    max-width: 100%;
  }
`

interface SelectButtonProps {
  active: boolean
  disabled?: boolean
}

const SelectButton = styled.div<SelectButtonProps>`
  background-color: ${({ disabled, theme }) =>
    disabled ? `${theme.colors.disabledCard}` : `${theme.colors.selectTopicBg}`};
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.colors.themeColor}`
      : `1px solid ${theme.colors.disabledButton}`};
  transition: background-color 0.4s ease-out;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  @media ${device.md} {
    padding: 10px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`

const SelectButtonText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  @media ${device.md} {
    font-size: 16px;
    font-weight: 500;
  }
`

const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
`
// const QuizDetailsScreen = () => {

//   const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails
//   const goToQuestionScreen = () => {
//     setCurrentScreen(ScreenTypes.QuestionScreen)
//   }

const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, quizDetails, selectQuizTopic, setCurrentScreen } = useQuiz()
  const [candidateName, setCandidateName] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase()

    // Verificar se o valor contém apenas letras e espaços
    if (/^[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÇ\s]*$/i.test(value)) {
      setCandidateName(value)
      setNameError('')
    } else {
      setNameError('O nome deve conter apenas letras e espaços.')
    }

    if (value.trim() === '') {
      setNameError('Por favor, digite seu nome completo.')
    }
  }

  const { quiz } = useParams()

  let quizTitle

  if (quiz === 'refrigeracao') {
    quizTitle = 'Refrigeração';
  } else if (quiz === 'eletrica') {
    quizTitle = 'Elétrica';
  } else {
    quizTitle = quiz; // mantém o valor original se não for nenhum dos valores específicos
  }


  const selectQuiz = async () => {
    console.log('==============================')
    console.log('select quiz')
    let check
    console.log('check declarado =>', check)
    if (!quiz) return alert('Erro!')
    if (quiz) {
      const find = await quizTopics.find(
        (e) => e.title.toLowerCase() === quiz.toLowerCase()
      )
      console.log('find =>', find)
      check = find?.title
      console.log('check redeclarado =>', check)
    }
    if (!check) return alert('Erro no Quiz do URL!')
    console.log('selecionando quiz...')
    selectQuizTopic(check)
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }

  const goToQuizDetailsScreen = () => {
    if (candidateName.trim() === '') {
      setNameError('Por favor, digite seu nome completo.')
      return
    }
    localStorage.setItem('candidateName', candidateName)
    selectQuiz()
  }

  console.log('PAGE =>', quiz)

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <Heading>
          Bem-Vindo ao teste de <HighlightedText>{quizTitle} Básica</HighlightedText>. 
        </Heading>
        <DetailText>Nome Completo do Candidato:</DetailText>
        <input
          type="text"
          value={candidateName}
          onChange={handleNameChange}
          placeholder="Digite seu nome completo"
        />
        {nameError && <ErrorText>{nameError}</ErrorText>}

        {/* <SelectButtonContainer>
          {quizTopics.map(({ title, icon, disabled }) => (
            <SelectButton
              key={title}
              active={quizTopic === title}
              onClick={() => !disabled && selectQuizTopic(title)}
              disabled={disabled}
            >
              {icon}
              <SelectButtonText>{title}</SelectButtonText>
            </SelectButton>
          ))}
        </SelectButtonContainer> */}
        <br/>
        <Button text="Continue" onClick={goToQuizDetailsScreen} bold />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen