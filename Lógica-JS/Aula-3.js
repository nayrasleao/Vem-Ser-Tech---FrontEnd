
// ### 1. **Criando uma lista de contatos**

// Crie uma lista de contatos, essa lista deve ter o seguintes dados:

// - Nome
// - Telefone
// - Endereço
//     - Nome da rua
//     - Número da residência
//     - Nome do bairro
// - Data de nascimento

const listaDeContatos = [
    {
      nome: 'Nayra Leão',
      telefone: '(92) 96050505',
      endereco: {
        rua: 'Rua 2',
        numero: 90,
        bairro: 'Nova Esperança',
      },
      dataNascimento: '15-03-1993',
    },
    {
      nome: 'Maria Clara',
      telefone: '(98) 997654321',
      endereco: {
        rua: 'Rua B',
        numero: 456,
        bairro: 'Flores',
      },
      dataNascimento: '21-09-1999',
    },

  ];


//   ### 2. Percorrendo a lista de contato

// Crie um laço de repetição que percorra toda a lista de contatos e mostre uma frase contento Nome, Telefone, Endereço e data de nascimento, exemplo:

// Bonus: Utilizar template string
  
  console.log('Minha Lista de Contatos:');
  // Laço de repetição para percorrer a lista
  for (const contato of listaDeContatos) {
    // Template string para exibir as informações
    console.log(`
    ${contato.nome}, telefone ${contato.telefone},
    mora na Rua ${contato.endereco.rua}, no número ${contato.endereco.numero},
    no bairro ${contato.endereco.bairro}, nascido na data de ${contato.dataNascimento}
  `);
  }



//   ### 3. Criando estrutura de números

// Crie laços de repetição para retornar a seguinte estrutura de numeros:

for (let i = 1; i <= 5; i++) {
  let numeroLinha = '';
  for (let j = 1; j <= i; j++) {
    numeroLinha += j;
  }
  console.log(numeroLinha);
}


// Agora tente criar o inverso:

for (let i = 5; i >= 1; i--) {
    let _numeroLinha = '';
    for (let j = 1; j <= i; j++) {
        _numeroLinha += j;
    }
    console.log(_numeroLinha);
  }
  
