const prompt = require ("prompt-sync")({sigint: true})
// Exercício Fácil:
// Escreva um programa em JavaScript que imprima todos os números de 1 a 10 utilizando um loop while.

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// Exercício Moderado:
// Escreva um programa em JavaScript que calcule a soma dos números de 1 a 100 utilizando um loop while. Imprima o resultado no final.


// function _Primo(numero) {
//     if (numero <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//       if (numero % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  

//   let numeroAtual = 1;
  
//   while (numeroAtual <= 100) {
//     if (_Primo(numeroAtual)) {
//       console.log(numeroAtual);
//     }
//     numeroAtual++;
//   }


  
// //   Exercício Avançado:
// // Escreva um programa em JavaScript que calcule e imprima os primeiros N termos da sequência de Fibonacci, onde N é um número fornecido pelo usuário, utilizando um loop while.


// function fibonacciAte(N) {
//     let numeroAtual = 0;
//     let numeroSeguinte = 1;
//     let contador = 0;
  
//     while (contador < N) {
//       console.log(numeroAtual);
  
//       let proximoNumero = numeroAtual + numeroSeguinte;
//       numeroAtual = numeroSeguinte;
//       numeroSeguinte = proximoNumero;
  
//       contador++;
//     }
//   }
  
//   const N = parseInt(prompt('Digite um número:'));
  

//   if (isNaN(N) || N <= 0) {
//     console.log('Digite um número válido maior que zero.');
//   } else {
//     fibonacciAte(N);
//   }




//   5. **Exercicios Desafiador:**
    
//   Escreva um programa em JavaScript cria uma lista de contatos, com dados inputados pelo usuário, dados para salvar:
  
//   - Nome
//   - Telefone
//   - Idade
//   - Profissão
  
//   O usuário deve inputar dados de 5 contatos.
  
//   Ao final o programa deve mostrar uma lista com os contatos.

// Função para criar a lista de contatos
function criarListaDeContatos() {
    const listaContatos = [];
  
    for (let i = 0; i < 5; i++) {
      console.log(`Cadastre 5 contatos. Contato número ${i + 1}:`);
      
      const nome = prompt('Nome:');
      const telefone = prompt('Telefone:');
      const idade = parseInt(prompt('Idade:'));
      const profissao = prompt('Profissão:');
  
      const contato = {
        nome: nome,
        telefone: telefone,
        idade: idade,
        profissao: profissao
      };
  
      listaContatos.push(contato);
    }
  
    return listaContatos;
  }

  function mostrarListaDeContatos(lista) {
    console.log('\nLista de Contatos Cadastrados:');
    for (const contato of lista) {
      console.log(`
      Nome: ${contato.nome}, 
      Telefone: ${contato.telefone}, 
      Idade: ${contato.idade}, 
      Profissão: ${contato.profissao}
      `);
    }
  }
  
  const listaDeContatos = criarListaDeContatos();
  mostrarListaDeContatos(listaDeContatos);
  