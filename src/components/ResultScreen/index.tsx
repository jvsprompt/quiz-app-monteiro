import { FC, useState, useRef } from 'react'
import styled, { css } from 'styled-components'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import { AppLogo, Refresh } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { device } from '../../styles/BreakPoints'
import { LogoContainer, PageCenter, CenterCardContainer } from '../../styles/Global'
import { refreshPage } from '../../utils/helpers'

import Button from '../ui/Button'
import CodeSnippet from '../ui/CodeSnippet'
import QuizImage from '../ui/QuizImage'
import ResultOverview from './ResultOverview'
import RightAnswer from './RightAnswer'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

const ModalContent = styled.div`
  width: 600px;
  padding: 50px 25px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ResultScreenContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
  @media ${device.md} {
    width: 90%;
    margin: 30px auto;
    padding-top: 40px;
  }
`

const InnerContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 40px 90px 90px 90px;
  @media ${device.md} {
    padding: 15px;
  }
`

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media ${device.md} {
    flex-direction: column;
  }
`

const QuestionNumber = styled.h6<{ correct?: boolean; wrong?: boolean }>`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme, correct, wrong }) =>
    correct
      ? theme.colors.success
      : wrong
      ? theme.colors.danger
      : theme.colors.primaryText};
`

const QuestionStyle = styled.span<{ correct?: boolean; wrong?: boolean }>`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme, correct, wrong }) =>
    correct
      ? theme.colors.success
      : wrong
      ? theme.colors.danger
      : theme.colors.primaryText};
  margin-bottom: 20px;
`

interface AnswerProps {
  correct?: boolean
  wrong?: boolean
}

const Answer = styled.li<AnswerProps>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 90%;
  @media ${device.md} {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.answerBg};
  border-radius: 16px;
  font-size: clamp(16px, 5vw, 18px);
  font-weight: 600;
  padding: 15px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);

  ${({ correct }) =>
    correct &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.success};
      background-color: ${({ theme }) => theme.colors.successLight};
    `}

  ${({ wrong }) =>
    wrong &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
      background-color: ${({ theme }) => theme.colors.dangerLight};
    `}

  span {
    margin-right: 14px;
  }
`

const Score = styled.span<{ right: boolean }>`
  font-weight: 550;
  font-size: 26px;
  color: ${({ right, theme }) =>
    right ? `${theme.colors.success}` : `${theme.colors.danger}`};

  margin-top: 4px;
`

const ResultScreen: FC = () => {
  const { result } = useQuiz()
  const [selectedResults, setSelectedResults] = useState<string[]>([])
  const ResultScreenContainerRef = useRef<HTMLDivElement>(null)

  const onClickRetry = () => {
    refreshPage()
  }

  const generatePDF = () => {
    if (!ResultScreenContainerRef.current) return

    const container = ResultScreenContainerRef.current

    // Obter a altura total da página
    const height = container.scrollHeight

    html2canvas(container, { scrollY: -window.scrollY, height }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: [canvas.width, canvas.height],
      }) // Usando o tamanho exato do canvas como tamanho do PDF

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
      pdf.save('result_screen.pdf')
    })
  }

  return (
    <ModalContainer>
      <ModalContent>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <ResultOverview result={result} />
          {/* <Button
            text="Reiniciar Teste"
            onClick={onClickRetry}
            icon={<Refresh />}
            iconPosition="left"
            bold
          />
          <Button text="Gerar PDF" onClick={generatePDF} bold /> */}
      </ModalContent>
      </ModalContainer>
  )
}

export default ResultScreen
