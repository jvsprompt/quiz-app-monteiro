import React, { useState } from 'react';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useParams } from 'react-router-dom';
import { AppLogo } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import { quizTopics } from '../../data/quizTopics';
import { device } from '../../styles/BreakPoints';
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global';
import { ScreenTypes } from '../../types';
import Button from '../ui/Button';

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 1700;
  margin-bottom: 20px;
  text-align: center;
`;

const DetailText = styled.p`
  font-weight: 1500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`;

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
`;

interface SelectButtonProps {
  active: boolean;
  disabled?: boolean;
}

const SelectButton = styled.div<SelectButtonProps>`
  background-color: ${({ disabled, theme }) =>
    disabled ? `${theme.colors.disabledCard}` : `${theme.colors.selectTopicBg}`};
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.colors.themeColor}`
      : `1px solid ${theme.colors.disabledButton}`};
  transition: background-color 0.4s ease-out;
  border-radius: 20px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  @media ${device.md} {
    padding: 10px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`;

const SelectButtonText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  @media ${device.md} {
    font-size: 16px;
    font-weight: 500;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
`;

const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, quizDetails, selectQuizTopic, setCurrentScreen } = useQuiz();
  const [candidateName, setCandidateName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();

    if (/^[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÇ\s]*$/i.test(value)) {
      setCandidateName(value);
      setNameError('');
    } else {
      setNameError('O nome deve conter apenas letras e espaços.');
    }

    if (value.trim() === '') {
      setNameError('Por favor, digite seu nome completo.');
    }
  };

  const { quiz } = useParams();

  let quizTitle;

  if (quiz === 'refrigeracao') {
    quizTitle = 'Refrigeração';
  } else if (quiz === 'eletrica') {
    quizTitle = 'Elétrica';
  } else {
    quizTitle = quiz;
  }

  const selectQuiz = async () => {
    if (!quiz) return alert('Erro!');
    const find = quizTopics.find(
      (e) => e.title.toLowerCase() === quiz.toLowerCase()
    );
    if (!find) return alert('Erro no Quiz do URL!');
    selectQuizTopic(find.title);
    setCurrentScreen(ScreenTypes.QuizDetailsScreen);
  };

  const goToQuizDetailsScreen = () => {
    if (candidateName.trim() === '') {
      setNameError('Por favor, digite seu nome completo.');
      return;
    }
    localStorage.setItem('candidateName', candidateName);
    selectQuiz();
  };

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <Heading>
          Bem-Vindo à Prova de <HighlightedText>{quizTitle} Básica</HighlightedText>.
        </Heading>
        <DetailText>Nome Completo do Candidato:</DetailText>
        <input
          type="text"
          className="form-control w-50"
          value={candidateName}
          onChange={handleNameChange}
          placeholder="Digite seu nome completo"
        />
        {nameError && <ErrorText>{nameError}</ErrorText>}
        <br />
        <Button text="Continue" onClick={goToQuizDetailsScreen} bold />
      </CenterCardContainer>
    </PageCenter>
  );
};

export default QuizTopicsScreen;
