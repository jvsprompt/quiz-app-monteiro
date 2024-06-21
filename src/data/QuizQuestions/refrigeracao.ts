// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const refrigeracao: Topic = {
  topic: 'Refrigeracao',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 1200,
  questions: [
    {
      // 1°
      question: 'Quais os componentes principais do ciclo de refrigeração?',
      choices: [
        'Compressor, Ventilador, Capacitor e Evaporador.',
        'Compressor, Evaporador e Condensador.',
        'Evaporador, Dispositivo de expansão, Compressor e Condensador.',
        'Evaporador, Ventilador, Condensador e Compressor.',
        'Compressor, Filtro, Condensador e Evaporador.',
      ],
      type: 'MCQs',
      correctAnswers: ['Evaporador, Dispositivo de expansão, Compressor e Condensador.'],
      score: 1,
    },
    {
      // 2°
      question: 'Qual a função do condensador ?',
      choices: [
        'Comprimir o fluido refrigerante.',
        'Evaporar o fluido refrigerante.',
        'Passagem de vapor para Liquido.',
        'Reter 0 (Zero) gás.',
        'Passagem de Liquido para solido.',
      ],
      type: 'MCQs',
      correctAnswers: ['Passagem de vapor para Liquido.'],
      score: 1,
    },
    {
      // 3°
      question: 'Qual a função do dispositivo de expansão?',
      choices: [
        'Promove queda de pressão e temperatura do gás.',
        'Condensa o fluido refrigerante.',
        'Congela o compressor.',
        'Aquece o compressor.',
        'Desliga o ventilador do evaporador.',
      ],
      type: 'MCQs',
      correctAnswers: ['Promove queda de pressão e temperatura do gás.'],
      score: 1,
    },
    {
      // 4°
      question: 'Qual a função do pressostato?',
      choices: [
        'Proteger o sistema de refrigeração.',
        'Indicar a temperatura ambiente.',
        'Indicar a pressão do compressor.',
        'Recolher o gás para o condensador.',
        'Liberar o gas para o compressor funcionar.',
      ],
      type: 'MCQs',
      correctAnswers: ['Proteger o sistema de refrigeração.'],
      score: 1,
    },
    {
      // 5°
      question: 'Quais as causas para um compressor funcionando queimar?',
      choices: [
        'Compressor desligado, capacitor queimado e ventilador funcionando.',
        'Pressostato desarmado, evaporador congelado, falta de agua e ventilador com defeito.',
        'Falta de agua, disjuntor desarmado, capacitor queimado e pressostato com defeito.',
        'Superaquecimento baixo, falta de gás, cabos frouxos e compressor desligado.',
        'Superaquecimento alto, cabos frouxos, falta de gás e tensão.',
      ],
      type: 'MCQs',
      correctAnswers: ['Superaquecimento alto, cabos frouxos, falta de gás e tensão.'],
      score: 1,
    },
    {
      // 6°
      question: 'Quais verificações são corretas em um split de 9.000BTUS?',
      choices: [
        'Pressão, Tensão, Correia, Amperagem e Temperatura.',
        'Temperatura, Tensão, Pressão e Amperagem.',
        'Pressao, Temperatura, Filtro e Correia.',
        'Filtro, Grade, Tensão, Polia e Correia.',
        'Polia, Correia, Filtro e Pressão.',
      ],
      type: 'MCQs',
      correctAnswers: ['Temperatura, Tensão, Pressão e Amperagem.'],
      score: 1,
    },
    {
      // 7°
      question: 'Procedimentos corretos em preventiva de quadro elétrico?',
      choices: [
        'Reaperto de parafusos, rnedicão de pressão, Limpeza e medição de tensão.',
        'Limpeza, medição de amperagem, lavar e reaperto de parafusos.',
        'Lavar, secar, rnedicão de tensão e amperagens.',
        'Limpar, reaperto de parafusos, verificar tensão e amperagem.',
        'Verificar tensão e amperagem, lavar e reapertar parafusos.',
      ],
      type: 'MCQs',
      correctAnswers: ['Limpar, reaperto de parafusos, verificar tensão e amperagem.'],
      score: 1,
    },
    {
      // 8°
      question: 'Qual é a sequência de  procedimentos corretos para realizar a troca de um compressor queimado?',
      choices: [
        'Vácuo, Limpeza do sistema, pressurização e funcionamento do compressor.',
        'Funcionamento do compressor, Limpeza do compressor e vácuo.',
        'Troca do filtro, Pressurização do sistema, vácuo e funcionamento do compressor.',
        'Limpeza do sistema, troca do filtro, pressurização e vácuo.',
        'Pressurização, Vácuo, Limpeza do sistema e troca do filtro.',
      ],
      type: 'MCQs',
      correctAnswers: ['Limpeza do sistema, troca do filtro, pressurização e vácuo.'],
      score: 1,
    },
    {
      // 9°
      question:
        'Quais os motivos para um sistema de refrigeração desarmar por alta pressão ?',
      choices: [
        'Falta de gás, Falta de agua, compressor com defeito e ventilador parado.',
        'Excesso de gás, correia do evaporador partida, falta de gás e gelo no compressor.',
        'Falta de gás, falta de agua, condensador sujo, compressor desligado.',
        'Condensador sujo, falta de agua, excesso de gás e ventilador parado no condensador.',
        'Válvula aberta, excesso de gás, óleo sujo, falta de gás e condensador sujo.',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Condensador sujo, falta de agua, excesso de gás e ventilador parado no condensador.',
      ],
      score: 1,
    },
    {
      // 10
      question: 'Selecione a opção que corresponda a coluna A:',
      code: `COLUNA A                                       COLUNA B\n 
(1) Passagem do vapor para liquido            ( ) Linha de sucção\n                                                             
(2) interliga evaporador e compressor         ( ) Linha de liquido\n
(3) Eleva pressão do refrigerante             ( ) Linha de descarga\n
(4) Ocorre a evaporação do refrigerante       ( ) Condensador\n
(5) Interliga condensador e evaporador        ( ) Evaporador\n
(6) Interliga compressor e condensador        ( ) Válvula de Expansão\n
(7) Controla fluxo do refrigerante para       ( ) Compressor
    o evaporador\n`,
      choices: [
        '2 - 5 - 7 - 1 - 3 - 6 - 4',
        '2 - 5 - 6 - 1 - 4 - 7 - 3',
        '5 - 2 - 1 - 7 - 3 - 4 - 6',
        '2 - 5 - 1 - 6 - 4 - 7 - 3',
        '3 - 5 - 1 - 6 - 7 - 4 - 2',
      ],
      type: 'MCQs',
      correctAnswers: ['2 - 5 - 6 - 1 - 4 - 7 - 3'],
      score: 1,
    },
  ],
}
