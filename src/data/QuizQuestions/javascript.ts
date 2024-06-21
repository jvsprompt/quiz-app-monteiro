// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import questionIX from '../../assets/images/eletrica/9.png'
import questionX from '../../assets/images/eletrica/10.png'
import questionXI from '../../assets/images/eletrica/11.png'
import questionXII from '../../assets/images/eletrica/12.png'
import questionXIV from '../../assets/images/eletrica/14.png'
import questionXV from '../../assets/images/eletrica/15.png'
import questionXVII from '../../assets/images/eletrica/17.png'


export const eletrica: Topic = {
  topic: 'Eletrica',
  level: 'Intermediate',
  totalQuestions: 17,
  totalScore: 17,
  totalTime: 1800,
  questions: [
    {
      // 1°
      question: 'Em uma instalação elétrica, quando ocorre o rompimento do condutor neutro alimentador, haverá:',
      choices: [
        'sub-tensão nos circuitos bifásicos.',
        'sobre-tensão nos circuitos bifásicos.',
        'possibilidade de queima de equipamentos elétricos dos circuitos monofásicos.',
        'funcionamento normal dos circuitos monofásicos, pois as fases estão ativas.',        
      ],
      type: 'MCQs',
      correctAnswers: ['possibilidade de queima de equipamentos elétricos dos circuitos monofásicos.'],
      score: 1,
    },
    {
      // 2°
      question: 'A NR-10 recomenda aos eletricistas, como medida de segurança no trabalho, a utilização do aterramento temporário, ou seja:',
      choices: [
        'controlado por relé de tempo.',
        'controlado pela temperatura.',
        'utilizado só quando precisar alimentar a carga.',
        'utilizado no momento da manutenção.',
      ],
      type: 'MCQs',
      correctAnswers: ['utilizado no momento da manutenção.'],
      score: 1,
    },
    {
      // 3°
      question: 'O interruptor adequado para comandar, de um único ponto, uma lâmpada 220 V (fase- fase) é o interruptor:',
      choices: [
        'paralelo simples.',
        'paralelo bipolar.',
        'intermediário.',
        'bipolar.',
      ],
      type: 'MCQs',
      correctAnswers: ['bipolar.'],
      score: 1,
    },
    {
      // 4°
      question: 'As grandezas elétricas: tensão, corrente e potência, pela ordem, têm como unidade:',
      choices: [
        'volt, watt e ampère.',
        'volt, ampère e watt.',
        'watt, volt e ampère.',
        'ampère, volt e watt.',     
      ],
      type: 'MCQs',
      correctAnswers: ['volt, ampère e watt.'],
      score: 1,
    },
    {
      // 5°
      question: 'Ao ligar uma lâmpada, um eletricista percebe que o seu brilho fica muito intenso, e em seguida o filamento se rompe. A causa foi:',
      choices: [
        'a tensão do circuito era superior à tensão da lâmpada.',
        'a potência da lâmpada era baixa para a tensão do circuito.',
        'a potência da lâmpada era alta para a tensão do circuito.',
        'a falta de aterramento na ligação.',
      ],
      type: 'MCQs',
      correctAnswers: ['a tensão do circuito era superior à tensão da lâmpada.'],
      score: 1,
    },
    {
      // 6°
      question: 'Em um circuito onde estava previsto o uso de condutores de 2,5 mm2 foi utilizado condutor de 6 mm2. A consequência será:',
      choices: [
        'maior consumo de energia.',
        'maior queda de tensão.',
        'um custo maior da instalação.',
        'super aquecimento do condutor.',
      ],
      type: 'MCQs',
      correctAnswers: ['um custo maior da instalação.'],
      score: 1,
    },
    {
      // 7°
      question: 'O diagrama elétrico usado para execução de instalações elétricas, que tem o objetivo de mostrar o percurso dos condutores elétricos, é o diagrama:',
      choices: [
        'funcional.',
        'unifilar.',
        'multifilar.',
        'de distribuição.',        
      ],
      type: 'MCQs',
      correctAnswers: ['unifilar.'],
      score: 1,
    },
    {
      // 8°
      question: 'Duas lâmpadas, uma de 60 W e outra de 100 W são ligadas em paralelo em uma rede elétrica de 127 V. Os valores de tensão elétrica nas lâmpadas serão na sequência:',
      choices: [
        '55 V e 55 V.',
        '60 V e 127 V.',
        '127 V e 60 V.',
        '127 V e 127 V.',        
      ],
      type: 'MCQs',
      correctAnswers: ['127 V e 127 V.'],
      score: 1,
    },
    {
      // 9°
      question: 'Os dispositivos elétricos mostrados nas figuras, na sequência apresentada, são:',
      image: questionIX,
      choices: [
        'contator, relé sobrecarga e fusível.',
        'contator, relé sobrecarga e disjuntor.',
        'Relé sobrecarga, fusível e contator.',
        'Relé sobrecarga, disjuntor e fusível.',
      ],
      type: 'MCQs',
      correctAnswers: ['contator, relé sobrecarga e fusível.'],
      score: 1,
    },
    {
      // 10°
      question:
        'As grandezas elétricas da chave seletora de um multímetro, mostradas nas sequências das figuras, são:',
        image: questionX,
        choices: [
        'tensão alternada, resistência e corrente alternada.',
        'corrente contínua, tensão contínua e resistência.',
        'tensão contínua, resistência e corrente contínua.',
        'resistência, corrente contínua e tensão alternada',
      ],
      type: 'MCQs',
      correctAnswers: [
        'tensão contínua, resistência e corrente contínua.',
      ],
      score: 1,
    },
    {
      // 11°
      question: `
      No esquema de ligação abaixo identifique a ligação de um (01) circuito paralelo que utiliza 2 interruptores e uma LÂMPADA. 
      Assinale a alternativa Verdadeira:`,
        image: questionXI,
        choices: [
          'Esquema 01.',
          'Esquema 02.',
          'Esquema 03.',
          'Todos as alternativas.',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Esquema 02.',
      ],
      score: 1,
    },
    {
      // 12°
      question:
        'A figura abaixo representa o esquema elétrico de qual ligação para partida de um motor?',
        image: questionXII,
        choices: [
          'Partida com rampa de suavização.',
          'Partida com reversão.',
          'Partida Estrela-Triângulo.',
          'Partida com chave compensadora.',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Partida com reversão.',
      ],
      score: 1,
    },
    {
      // 13°
      question:
        'Na partida de motores elétricos, a corrente pode atingir valores elevados, o que pode causar queda de tensão na rede. Esse efeito não é desejado, portanto, uma das técnicas para reduzir a corrente de partida de motores é a utilização de:',
        choices: [
          'Transformador defasador.',
          'Banco de capacitores.',
          'Partida Estrela-Triângulo.',
          'Limitador de sobre-excitação elétrica.',
        ],        
      type: 'MCQs',
      correctAnswers: [
        'Partida Estrela-Triângulo.',
      ],
      score: 1,
    },
    {
      // 14°
      question:
        'No esquema de comando seguinte, o relé térmico de terminais 95 e 96 desliga o motor por meio da dilatação de suas lâminas bimetálicas, em situações como sobrecorrente gerada por travamento do rotor.',
        image: questionXIV,
        choices: [
          'Errado.',
          'Certo.',
        ],      
      type: 'boolean',
      correctAnswers: ['Certo.'],
      score: 1,
    },
    {
      // 15°
      question:
        'O diagrama representado é configurado para acionamento e proteção de um motor trifásico.',
        image: questionXV,
        choices: [
          'o acionamento é uma chave estrela/triângulo e os contatores K1, K2 e K3 permanecem fechados após a partida.',
          'inicialmente a partida ocorre na conexão estrela e os contatores K1 e K2 são fechados, em seguida K2 é aberto e K3 é fechado para a conexão triângulo.',
          'o comando é um acionamento de motor, com reversão de rotação.',
          'inicialmente a partida ocorre na conexão estrela e os contatores K3 e K2 são fechados, em seguida K2 é aberto e K1 é fechado para a conexão triângulo.',          
      ],
      type: 'MCQs',
      correctAnswers: [
        'inicialmente a partida ocorre na conexão estrela e os contatores K1 e K2 são fechados, em seguida K2 é aberto e K3 é fechado para a conexão triângulo.',
      ],
      score: 1,
    },
    {
      // 16°
      question:
        'A utilização de soft starters gera a redução da corrente de partida com mínimo prejuízo no torque.',
        choices: [
          'Errado.',
          'Certo.',
        ],      
      type: 'boolean',
      correctAnswers: ['Certo.'],
      score: 1,
    },
    {
      // 17°
      question:
        'Na figura a seguir, o motor está ligado em delta no esquema I, e em estrela no esquema II.',
        image: questionXVII,
        choices: [
          'Errado.',
          'Certo.',
        ],      
      type: 'boolean',
      correctAnswers: ['Errado.'],
      score: 1,
    },
  ],
}