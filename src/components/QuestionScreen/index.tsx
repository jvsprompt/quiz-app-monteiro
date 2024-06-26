import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import { AppLogo, CheckIcon, Next, TimerIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { useTimer } from '../../hooks'
import { device } from '../../styles/BreakPoints'
import { PageCenter } from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { ENTRY_QUIZ_REFRI, ENTRY_QUIZ_ELETRIC, FORM_URL_REFRI, FORM_URL_ELETRIC } from '../../config/strings'

import Button from '../ui/Button'
import ModalWrapper from '../ui/ModalWrapper'
import Question from './Question'
import QuizHeader from './QuizHeader'
import submitForm from '../../utils/submitForm'
import { refreshPage } from '../../utils/helpers'
import { generateFormData } from '../../utils/formData'

const QuizContainer = styled.div<{ selectedAnswer: boolean }>`
  width: 900px;
  min-height: 500px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 14px;
  padding: 30px 60px 80px 60px;
  margin-bottom: 70px;
  position: relative;
  @media ${device.md} {
    width: 120%;
    padding: 15px 15px 80px 15px;
  }
  button {
    span {
      svg {
        path {
          fill: ${({ selectedAnswer, theme }) =>
            selectedAnswer ? `${theme.colors.buttonText}` : `${theme.colors.darkGray}`};
        }
      }
    }
  }
`

const LogoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  @media ${device.md} {
    margin-top: 10px;
    margin-bottom: 20px;
    svg {
      width: 185px;
      height: 80px;
    }
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 60px;
  bottom: 30px;
  display: flex;
  gap: 20px;
  @media ${device.sm} {
    justify-content: flex-end;
    width: 90%;
    right: 15px;
  }
`

const QuestionScreen: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([])
  const [showTimerModal, setShowTimerModal] = useState<boolean>(false)
  const [showResultModal, setShowResultModal] = useState<boolean>(false)

  const {
    questions,
    setQuestions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
    quizTopic,
    endTime,
  } = useQuiz()

  const currentQuestion = questions[activeQuestion]

  const { question, questionb, type, choices, code, image, correctAnswers } = currentQuestion
   

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  const { quiz } = useParams()

  const submitData = () => {
    const pages = [
      {
        name: 'refrigeracao', //use Params
        entry: ENTRY_QUIZ_REFRI,
        url: FORM_URL_REFRI,
      },
      {
        name: 'eletrica', //use Params
        entry: ENTRY_QUIZ_ELETRIC,
        url: FORM_URL_ELETRIC,
      },
    ];

    let formData;

    const dataArray = (): Array<string> => {
      const data: Array<string> = []
      data.push(localStorage.candidateName)

      for (let i = 0; i <= result.length - 1; i++) {
        data.push(result[i].selectedAnswer[0])
        data.push(result[i].isMatch?.toString())
      }

      data.push(obtainedScore.toString())
      data.push(endTime.toString())

      return data;
    }

    const getPage = pages.find((p) => p.name.toLowerCase() === quiz?.toLowerCase())
    if (getPage) {
      formData = generateFormData(getPage.entry, dataArray())
      console.log('form data =>', formData)
      return submitForm(getPage.url, formData)
    }
  }

  const onClickNext = () => {
    const isMatch: boolean =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer))

    // adding selected answer, and if answer matches key to result array with current question
    setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }])

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      // how long does it take to finish the quiz
      const timeTaken = quizDetails.totalTime - timer
      setEndTime(timeTaken)
      setShowResultModal(true)
    }
    setSelectedAnswer([])
  }

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    if (type === 'MAQs') {
      if (selectedAnswer.includes(name)) {
        setSelectedAnswer((prevSelectedAnswer) =>
          prevSelectedAnswer.filter((element) => element !== name)
        )
      } else {
        setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, name])
      }
    }

    if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        setSelectedAnswer([name])
      }
    }
  }

  // const handleSkipQuestion = () => {
  //   const filterQuestion = questions.filter(
  //     (item) => item.question !== currentQuestion.question
  //   )

  //   // in case of skip question add current questions to the end of questions array, with skipped key
  //   setQuestions([...filterQuestion, { ...currentQuestion, skipped: true }])
  //   setSelectedAnswer([])
  // }

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen)
    submitData()
    document.body.style.overflow = 'auto'
    // refreshPage();
  }

  // to prevent scrolling when modal is opened
  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden'
    }
  }, [showTimerModal, showResultModal])

  // timer hooks, handle conditions related to time
  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal)

  React.useEffect(() => {
    console.log('total score =>', quizDetails)
  })

  const onClickRetry = () => {
    refreshPage()
  }

  return (
    <PageCenter>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <QuizContainer selectedAnswer={selectedAnswer.length > 0}>
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.totalQuestions}
          timer={timer}
          skipped={currentQuestion?.skipped}
        />
        <Question
          question={question}
          code={code}
          image={image}
          questionb={questionb}
          choices={choices}
          type={type}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />
        <ButtonWrapper>
          {/* {!currentQuestion?.skipped && (
            <Button text="Skip" onClick={handleSkipQuestion} outline />
          )} */}
          <Button
            text={activeQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
            onClick={onClickNext}
            icon={<Next />}
            iconPosition="right"
            disabled={selectedAnswer.length === 0}
          />
        </ButtonWrapper>
      </QuizContainer>
      {/* timer or finish quiz modal*/}
      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Finalizado!' : 'Seu Tempo acabou!'}
          subtitle={`Você respondeu ${result.length} questões no total.`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
          buttonTitle="Mostrar Resultado"
        />
      )}
    </PageCenter>
  )
}

export default QuestionScreen
