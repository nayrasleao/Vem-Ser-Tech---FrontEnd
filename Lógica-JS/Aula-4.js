const prompt = require ("prompt-sync")({sigint: true})
// Exercício Fácil:
// Escreva um programa em JavaScript que verifica se um número é positivo, negativo ou igual a zero. Use a estrutura if-else para realizar essa verificação.

let number = prompt("Digite um número positivo ou negativo: ");

if (number > 0) {
    console.log("Exercício Fácil: O número é Positivo!")
} else if (number < 0) {
    console.log("Exercício Fácil: O número é Negativo!")
} else {
    console.log("Exercício Fácil: O número é igual a 0!")
}

// // // Exercício Moderado:
// // // Escreva um programa em JavaScript que verifica se um número é par ou ímpar. Use a estrutura if-else para realizar essa verificação.
let numeroParImpar = number % 2 === 0 ? 'Par' : 'Impar';
console.log("Exercício Moderado: O número é " + numeroParImpar + "!")

// // Exercício Avançado:
// // Escreva um programa em JavaScript que verifica se um ano é bissexto. Use a estrutura if-else para realizar essa verificação. 

let ano = prompt("Digite um ano para descobrir de é Bissexto: ")
if ((ano % 4 === 0 && ano % 100 !== 0) ||  ano % 400 === 0) {
    console.log("Exercício Avançado:" + ano + " é bissexto")
} else {
    console.log("Exercício Avançado:" + ano + " não é bissexto")
}

// Exercício Desafiador:
// Escreva um programa em JavaScript que verifica se um número é um palíndromo. Use a estrutura if-else para realizar essa verificação. Um palíndromo é um número que permanece o mesmo quando seus dígitos são invertidos.

let numeroPalindromo = parseInt(prompt("Digite um número para descobrir se ele é Palindromo: "))
let numeroInvertido = parseInt(numeroPalindromo.toString().split('').reverse().join(''));
console.log("O número invertido: " + numeroInvertido)
if (numeroPalindromo === numeroInvertido) {
    console.log("É um número palíndromo")
} else {
    console.log("Não é um número palíndromo")
    
}