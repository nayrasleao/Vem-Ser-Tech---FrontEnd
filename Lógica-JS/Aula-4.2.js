// Exercício Fácil:
// Escreva um programa em JavaScript que recebe uma cor em inglês e retorna o seu nome em português. Utilize a estrutura switch/case para realizar essa verificação. As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto).
let colorEnglish = 'green';

switch (colorEnglish) {
    case 'red':
        colorEnglish = 'Vermelho';
        break;
    case 'blue':
        colorEnglish = 'Azul';
        break;
    case 'green':
        colorEnglish = 'Verde';
        break;
    case 'yellow':
        colorEnglish = 'Amarelo';
        break;
    case 'black':
        colorEnglish = 'Preto';
        break;

    default:
        colorEnglish = 'Não encontrei a tradução.';
        break;
}

console.log('Tradução: ' + colorEnglish)

// Exercício Moderado:
// Escreva um programa em JavaScript que recebe um número de 1 a 12 e retorna o mês correspondente. Caso seja um número inválido retorna "Número inválido.” Utilize a estrutura switch/case para realizar essa verificação.

// Função para retornar o mês correspondente ao número
    let nomeDoMes = 3;
  
    switch (nomeDoMes) {
      case 1:
        nomeDoMes = 'Janeiro';
        break;
      case 2:
        nomeDoMes = 'Fevereiro';
        break;
      case 3:
        nomeDoMes = 'Março';
        break;
      case 4:
        nomeDoMes = 'Abril';
        break;
      case 5:
        nomeDoMes = 'Maio';
        break;
      case 6:
        nomeDoMes = 'Junho';
        break;
      case 7:
        nomeDoMes = 'Julho';
        break;
      case 8:
        nomeDoMes = 'Agosto';
        break;
      case 9:
        nomeDoMes = 'Setembro';
        break;
      case 10:
        nomeDoMes = 'Outubro';
        break;
      case 11:
        nomeDoMes = 'Novembro';
        break;
      case 12:
        nomeDoMes = 'Dezembro';
        break;
      default:
        nomeDoMes = 'Número inválido.';
    }

    console.log('Mês respectivo: ' + nomeDoMes)

    // Exercício Intermediário:
    // Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se é uma vogal ou uma consoante.  Utilize a estrutura switch/case para realizar essa verificação.
    let letraAlfabeto = 'a'; 
    switch (letraAlfabeto) {
        case 'a':
            letraAlfabeto = 'É Vogal!'
            break;
        case 'e':
            letraAlfabeto = 'É Vogal!'
            break;
        case 'i':
            letraAlfabeto = 'É Vogal!'
            break;
        case 'o':
            letraAlfabeto = 'É Vogal!'
            break;
        case 'u':
            letraAlfabeto = 'É Vogal!'
            break;
    
        default:
            letraAlfabeto = 'É Consoante!'
            break;
    }

    console.log('A letra : ' + letraAlfabeto)

//     Exercício Avançado:
// Crie um programa em JavaScript que implemente uma calculadora básica. A função calculadora receberá dois números como parâmetro e um terceiro parâmetro indicando a ação a ser executada. Utilize a estrutura switch/case para realizar a operação correta com base na ação fornecida. As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar". O resultado da operação deve ser retornado pela função.

function calculadora(valor1, valor2, operacao) {
    let resultado;

    switch (operacao) {
        case 'somar':
            resultado = valor1+valor2;
            break;
        case 'subtrair':
            resultado = valor1-valor2;
            break;
        case 'dividir':
            resultado = valor1/valor2;
            break;
        case 'multiplicar':
            resultado = valor1*valor2;
            break;
    
        default:
            resultado = 'As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar".'
            break;
    }

    return resultado;
}

console.log(calculadora(5, 3, 'somar'));        // Saída: 8
console.log(calculadora(10, 2, 'subtrair'));    // Saída: 8
console.log(calculadora(15, 3, 'dividir'));     // Saída: 5
console.log(calculadora(4, 7, 'multiplicar'));  // Saída: 28
console.log(calculadora(4, 7, 'potencia'));    //As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar".

// Exercício Desafiado
// Escreva um programa em JavaScript que recebe um número de 1 a 7 e retorna o dia da semana correspondente. Utilize a estrutura switch/case para realizar essa verificação.
// Além disso, implemente uma verificação adicional utilizando if-else para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado), e "Dia útil" caso contrário.

function verificarDiaSemana(diaSemana) {
    let resultado;
    switch (diaSemana) {
            case 1:
                resultado = 'Domingo'
                break;
            case 2:
                resultado = 'Segunda-Feira'
                break;
            case 3:
                resultado = 'Terça-Feira'
                break;
            case 4:
                resultado = 'Quarta-Feira'
                break;
            case 5:
                resultado = 'Quinta-Feira'
                break;
            case 6:
                resultado = 'Sexta-Feira'
                break;
            case 7:
                resultado = 'Sabádo'
                break;
    
        default:
            console.log('Digite um número de 1 a 7.');
                return;
    }



if (diaSemana == 1 || diaSemana == 7) {
    return `${resultado} - Fim de semana`
} else {
    return `${resultado} - Dia útil`
    
}
}

console.log(verificarDiaSemana(7));