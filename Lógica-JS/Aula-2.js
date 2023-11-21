// ### Exercício 1: Soma dos elementos de um vetor

// Dado um vetor `numeros` com 5 elementos, calcule a soma de todos os valores e armazene o resultado na variável `soma`. Utilize o índice para acessar os valores do vetor e realizar os cálculos.


const numeros = [10, 5, 8, 12, 3, 19];
let somaN = 0;
// let soma = numeros[0]+numeros[1]+numeros[2]+numeros[3]+numeros[4]+numeros[5];

for (let i = 0; i < numeros.length; i++) {
    somaN+=numeros[i];
    
}
console.log("Ex1 - A soma de todos os valores do vetor é:  " + somaN)



// ### Exercício 2: Média dos elementos de um vetor

// Dado um vetor `notas` com 4 elementos, calcule a média aritmética de todos os valores e armazene o resultado na variável `media`. Utilize o índice para acessar os valores do vetor e realizar os cálculos.


const notas = [17, 28, 39, 96, 55];
let media = 0;
// let media = (notas[0]+notas[1]+notas[2]+notas[3]+notas[4]) / notas.length;
for(let i=0; i < notas.length; i++){
    media+=notas[i] / notas.length;
}
console.log("Ex2 - A média dos elementos do vetor é: " + media)





// Exercício 3: Encontrar o maior valor de um vetor
// Dado um vetor valores com 6 elementos, encontre o maior valor presente no vetor e armazene-o na variável maiorValor. Utilize o índice para acessar os valores do vetor e realizar as comparações com Math.max.


const valores = [25, 18, 32, 12, 20, 28];
let maiorValor = Math.max(valores[0], valores[1], valores[2], valores[3], valores[4], valores[5]);
console.log("Ex3 - O maior valor do vetor é: " + maiorValor)


// Exercício 4: Produto dos elementos de uma matriz
// Dada uma matriz matriz com 3 linhas e 3 colunas, calcule o produto de todos os valores e armazene o resultado na variável produto. Utilize o índice para acessar os valores da matriz e realizar os cálculos.


const matriz = [
  [2, 4, 6],
  [3, 7, 9],
  [5, 8, 10]
];

let produto = 1;

// let produto = matriz[0][0]*matriz[0][1]*matriz[0][2]*matriz[1][0]*matriz[1][1]*matriz[1][2]*matriz[2][0]*matriz[2][1]*matriz[2][2];

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        let aux  = matriz[i][j];
        produto*= aux;

    }
}

console.log("Ex4 - O produto dos elementos da matriz é: " + produto)


// Exercício 5: Média dos elementos de uma matriz
// Dada uma matriz notas com 4 linhas e 2 colunas, calcule a média aritmética de todos os valores e armazene o resultado na variável media. Utilize o índice para acessar os valores da matriz e realizar os cálculos.


const notasM = [
  [17, 28, 11],
  [46, 39, 44],
  [35, 57, 44],
  [48, 39, 88]
];


let mediaM = 0;

// let mediaM = (notasM[0][0]+notasM[0][1]+notasM[0][2]+notasM[1][0]+notasM[1][1]+notasM[1][2]+notasM[2][1]+notasM[2][2] ) / notasM.length;

for(let i = 0; i < notasM.length; i++){
    for(let j = 0; j < notasM[i].length; j++){
        let soma= 0;
        let aux  = notasM[i][j];
        soma += aux;
        mediaM = soma / notasM.length;

    }
}
console.log("Ex5 - A média dos elementos da matriz é: " + mediaM)



// Exercício 6: Encontrar o menor valor de uma matriz
// Dada uma matriz valores com 2 linhas e 4 colunas, encontre o menor valor presente na matriz e armazene-o na variável menorValor. Utilize o índice para acessar os valores da matriz e realizar as comparações com Math.min.


const valoresM = [
  [15, 12, 18, 10],
  [14, 9, 16, 11]
];

let menorValor = Math.min(valoresM[0][0],valoresM[0][1],valoresM[0][2],valoresM[0][3], valoresM[1][0], valoresM[1][1], valoresM[1][2], valoresM[1][3]);
console.log("Ex6 - O menor valor da matriz é: " + menorValor)