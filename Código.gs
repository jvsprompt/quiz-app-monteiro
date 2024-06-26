function verificarAtencaoEnviarEmail() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName("Respostas"); // Alteração do nome da aba para "Respostas"

  // Verifica se a aba 'Respostas' existe
  if (!aba) {
    console.error("A aba 'Respostas' não foi encontrada.");
    return;
  }

  // Última linha de resposta do formulário
  var lastRow = aba.getLastRow();
  var lastRowValues = aba.getRange(lastRow, 1, 1, 38).getValues()[0]; // Considerando até a coluna AL (37 colunas)

  var dataFormatadaA = lastRowValues[0] instanceof Date ? formatDatePT(lastRowValues[0]) : lastRowValues[0]; // Formatação da data da coluna A
  var nomeCandidato = 'Candidato: ' + lastRowValues[1]; // Nome do candidato da coluna B
  var tempoGasto = 'Tempo Gasto: ' + formatarTempoGasto(lastRowValues[37]); // Tempo gasto da coluna AK

  // Tradução de valores para Verdadeiro ou Falso
  var translatedValues = [
    translateToBoolean(lastRowValues[3]), // Coluna D
    translateToBoolean(lastRowValues[5]), // Coluna F
    translateToBoolean(lastRowValues[7]), // Coluna H
    translateToBoolean(lastRowValues[9]), // Coluna J
    translateToBoolean(lastRowValues[11]), // Coluna L
    translateToBoolean(lastRowValues[13]), // Coluna N
    translateToBoolean(lastRowValues[15]), // Coluna P
    translateToBoolean(lastRowValues[17]), // Coluna R
    translateToBoolean(lastRowValues[19]), // Coluna T
    translateToBoolean(lastRowValues[21]),  // Coluna V
    translateToBoolean(lastRowValues[23]), // Coluna X
    translateToBoolean(lastRowValues[25]), // Coluna Z
    translateToBoolean(lastRowValues[27]),
    translateToBoolean(lastRowValues[29]),
    translateToBoolean(lastRowValues[31]),
    translateToBoolean(lastRowValues[33]),
    translateToBoolean(lastRowValues[35]),
  ];

  // Pontuação (valor real) da coluna AK
  var pontuacao = lastRowValues[36];

  // Verificação e adição de "Reprovado" ou "Aprovado"
  var resultadoProva = pontuacao < 11 ? 'Reprovado ❌' : 'Aprovado ✅';
  var resultadoProvaCor = pontuacao < 11 ? 'red' : 'green'; // Cor vermelha para reprovado, verde para aprovado

  // Montagem da tabela HTML
  var tableHTML = '<table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd; font-family: Arial, sans-serif;">';
  tableHTML += '<caption style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">⚡ Resultado da Prova de Elétrica ⚡</caption>';
  tableHTML += '<tbody>';

  // // Adiciona a linha para a data da coluna A
  // tableHTML += '<tr>';
  // tableHTML += '<td style="border: 0; padding: 8px; font-weight: bold;">Data e Hora:</td>';
  // tableHTML += '<td colspan="1" style="border: 0; padding: 8px;">' + dataFormatadaA + '</td>';
  // tableHTML += '</tr>';

  // Adiciona uma linha em branco para separar
  tableHTML += '<tr><td colspan="3" style="border: 0; height: 20px;"></td></tr>';

  // Adiciona a linha para o resultado da prova
  tableHTML += '<tr>';
  tableHTML += '<td colspan="3" style="border: 0; padding: 8px; font-weight: bold; color: ' + resultadoProvaCor + ';">Resultado da Prova: ' + resultadoProva + '</td>';
  tableHTML += '</tr>';

  // Adiciona a linha para o nome do candidato da coluna B
  tableHTML += '<tr>';
  tableHTML += '<td colspan="3" style="border: 0; padding: 8px; font-weight: bold">' + nomeCandidato + '</td>';
  tableHTML += '</tr>';

  // Adiciona a linha para o tempo gasto (coluna X)
  tableHTML += '<tr>';
  tableHTML += '<td colspan="3" style="border: 0; padding: 8px; font-weight: bold;">' + tempoGasto + '</td>';
  tableHTML += '</tr>';

  // Adiciona uma linha em branco para separar
  tableHTML += '<tr><td colspan="3" style="border: 0; height: 20px;"></td></tr>';

  // Adiciona o cabeçalho da tabela
  tableHTML += '<tr style="background-color: #EFB810; color: #fff;">'; // Cor de fundo e texto branco para o cabeçalho
  tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">📑 Questões</td>';
  tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">✍🏻 Respostas</td>';
  tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">🎯 Pontos</td>';
  tableHTML += '</tr>';

// Array com os nomes das questões
var questoes = [
  'QUESTÃO 1',
  'QUESTÃO 2',
  'QUESTÃO 3',
  'QUESTÃO 4',
  'QUESTÃO 5',
  'QUESTÃO 6',
  'QUESTÃO 7',
  'QUESTÃO 8',
  'QUESTÃO 9',
  'QUESTÃO 10',
  'QUESTÃO 11',
  'QUESTÃO 12',
  'QUESTÃO 13',
  'QUESTÃO 14',
  'QUESTÃO 15',
  'QUESTÃO 16',
  'QUESTÃO 17'
];

// Adiciona as linhas para cada questão, resposta e pontos
for (var i = 0; i < translatedValues.length; i++) {
  var pontos = translatedValues[i] === 'CORRETA' ? 1 : 0; // Atribui 1 se Verdadeiro, senão 0
  tableHTML += '<tr>';
  tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center;">' + questoes[i] + '</td>'; // Questão específica
  tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center;">' + translatedValues[i] + '</td>'; // Resposta correspondente
  tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center;">' + pontos + '</td>'; // Pontos correspondentes
  tableHTML += '</tr>';
}

  // // Adiciona as linhas para cada questão, resposta e pontos
  // for (var i = 0; i < translatedValues.length; i++) {
  //   var pontos = translatedValues[i] === 'Verdadeiro' ? 1 : 0; // Atribui 1 se Verdadeiro, senão 0
  //   tableHTML += '<tr>';
  //   tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center;">' + (i + 1) + '</td>'; // Questão de 1 a 10
  //   tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center;">' + translatedValues[i] + '</td>'; // Resposta correspondente
  //   tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center;">' + pontos + '</td>'; // Pontos correspondentes
  //   tableHTML += '</tr>';
  // }

  // Adiciona a linha para a pontuação (coluna W)
  tableHTML += '<tr style="background-color: #EFB810; color: #fff;">'; // Cor de fundo e texto branco para a linha
  tableHTML += '<td colspan="2" style="border: 1px solid #ddd; padding: 8px; font-weight: bold; text-align: center;">🔢 Pontuação Total:</td>';
  tableHTML += '<td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">' + pontuacao + '</td>';
  tableHTML += '</tr>';

  // // Adiciona uma linha em branco para separar
  // tableHTML += '<tr><td colspan="3" style="border: 0; height: 20px;"></td></tr>';

  // // Adiciona a linha para o resultado da prova
  // tableHTML += '<tr>';
  // tableHTML += '<td colspan="3" style="border: 0; padding: 8px; text-align: center; font-weight: bold; color: ' + resultadoProvaCor + ';">Resultado da Prova: ' + resultadoProva + '</td>';
  // tableHTML += '</tr>';

  // // Adiciona uma linha em branco para separar
  // tableHTML += '<tr><td colspan="3" style="border: 0; height: 20px;"></td></tr>';

  tableHTML += '</tbody>';
  tableHTML += '</table>';

  // Envio de e-mail
  var recipientEmails = ['grupomonteirotec@gmail.com', 'rh@monteiroinstalacoes.com.br', 'atendimento.rh@monteiroinstalacoes.com.br'];//, 'claudioflm@gmail.com'];
  var senderEmail = 'grupomonteirotec@gmail.com';
  var subject = '📝 Resultado da Prova de Elétrica Básica do ';

  MailApp.sendEmail({
    to: recipientEmails.join(','), // Junta os destinatários separados por vírgula
    subject: subject + nomeCandidato,
    htmlBody: tableHTML,
    name: 'Grupo MonteiroTec',
    replyTo: senderEmail
  });

  console.log('E-mail enviado com sucesso para: ' + recipientEmails.join(','));
}

//Função para formatar a data
function formatDatePT(date) {
  var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  var dia = date.getDate();
  var mes = date.getMonth();
  var ano = date.getFullYear();
  var diaSemana = date.getDay();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var formattedTime = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);

  return diasSemana[diaSemana] + ', ' + dia + ' de ' + meses[mes] + ' de ' + ano + ' às ' + formattedTime;
}

// Função para traduzir valores booleanos para Verdadeiro ou Falso
function translateToBoolean(value) {
  return value === true || value === 'TRUE' || value === 'VERDADEIRO' ? 'CORRETA' : 'ERRADA';
}


// Função para formatar o tempo gasto em segundos para formato legível
function formatarTempoGasto(segundos) {
  if (segundos >= 60) {
    var minutos = Math.floor(segundos / 60);
    var restoSegundos = segundos % 60;
    return minutos + ' Minuto(s) ' + ' e ' + restoSegundos + ' Segundo(s)';
  } else {
    return segundos + ' Segundo(s)';
  }
}