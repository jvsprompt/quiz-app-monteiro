import { Theme } from './styled'

export const themes: Record<string, Theme> = {
  light: {
    colors: {
      primaryText: '#11052C', // question text color
      secondaryText: '#2D264B', // answer text color
      themeText: '#000000',
      themeColor: '#162857',
      themeGradient: 'linear-gradient(to right,#162857, #23498E)',
      background: '#162857',
      cardBackground: '#FFFFFF',
      selectTopicBg: '#FFFFFF',
      appLogo: '#162857',
      buttonText: '#FFFFFF',
      outlineButtonText: '#162857',
      buttonBackground: 'linear-gradient(90.04deg, #162857 0.03%, #23498E 99.96%)',
      selectedAnswer: '#81A6D3',
      infoText: '#2D264B', // skip tag text
      infoBackground: '#81A6D3', // skip tag background
      border: '#EAEAEA',
      answerBg: '#ffffff',
      disabledCard: '#fbf4ecbc',
      disabledButton: '#e7e8e9',
      success: '#12B40E',
      successLight: '#DDFFDC',
      danger: '#FF143E',
      dangerLight: '#FFD7DE',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
  dark: {
    colors: {
      primaryText: '#FFFFFF', // question text color
      secondaryText: '#FFFFFF', // answer text color
      themeText: '#FFFFFF',
      themeColor: '#3166CA',
      themeGradient: 'linear-gradient(90deg, #162857 0%, #162857 100%)',
      background: 'linear-gradient(90deg, #162857 0%, #162857 100%)',
      cardBackground: '#070D1D',
      selectTopicBg: '#21191C',
      appLogo: '#FFFFFF',
      buttonText: '#FFFFFF',
      outlineButtonText: '#ffffff',
      buttonBackground: 'linear-gradient(90.04deg, #162857 0.03%, #23498E 99.96%)',
      selectedAnswer: '#0E1A3A',
      infoText: '#FF783F', // skip tag text
      infoBackground: '#ffb23f26', // skip tag background
      border: 'transparent',
      answerBg: '#22488D',
      disabledCard: '#00000080',
      disabledButton: '#162857',
      success: '#12B40E',
      successLight: '#151113',
      danger: '#FF143E',
      dangerLight: '#151113',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
}
