//Exercício 1
function contadorDeHortifrutis(hotifrutis) {

    const tipos = new Map([
      ['frutas', ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão']],
      ['legumes', ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró']],
      ['verduras', ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga']]
    ]);
  

    const contagem = new Map([
      ['frutas', 0],
      ['legumes', 0],
      ['verduras', 0]
    ]);
  

    for (const item of hotifrutis) {

      for (const [tipo, lista] of tipos.entries()) {
        if (lista.includes(item)) {
          contagem.set(tipo, contagem.get(tipo) + 1);
          break;
        }
      }
    }
  
    return contagem;
  }

  const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão', 'cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata'];
  
  const resultado = contadorDeHortifrutis(hotifrutis);
  console.log('Número de frutas:', resultado.get('frutas'));
  console.log('Número de legumes:', resultado.get('legumes'));
  console.log('Número de verduras:', resultado.get('verduras'));

  //Exercicio 2
  const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
  ];
  
  function verificarSalario(empregados, valorSalario) {
    return empregados.some(empregado => empregado.salario >= valorSalario);
  }
  
  function verificarSalario(empregados, valorSalario) {
    return empregados.some(empregado => empregado.salario <= valorSalario);
  }
  

  const temSalarioMaiorOuIgual1500 = verificarSalario(empregados, 1500);
  const temSalarioMenorOuIgual1000 = verificarSalario(empregados, 1000);
  
  console.log('Algum empregado tem salário maior ou igual a R$ 1.500,00:', temSalarioMaiorOuIgual1500);
  console.log('Algum empregado tem salário menor ou igual a R$ 1.000,00:', temSalarioMenorOuIgual1000);
  
  //Exercício 3
  const atletas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
  ];
  
  function calcularIMC(atleta) {
    const alturaAoQuadrado = atleta.altura * atleta.altura;
    const imc = atleta.peso / alturaAoQuadrado;
    return imc;
  }
  
  function exibirIMC(atletas) {
    atletas.forEach(atleta => {
      const imc = calcularIMC(atleta);
      console.log(`O IMC de ${atleta.nome} é ${imc.toFixed(2)}`);
    });
  }
  

  exibirIMC(atletas);  
  
  //Exercicio 4
  const alunos = [
    { nome: 'Ana', notas: [7, 8, 9] },
    { nome: 'Pedro', notas: [5, 6, 7] },
    { nome: 'Maria', notas: [9, 8, 10] },
    { nome: 'João', notas: [6, 7, 8] },
    { nome: 'Lucas', notas: [8, 9, 7] },
    { nome: 'Julia', notas: [10, 8, 9] }
  ];
  
  console.log('Segue a média dos alunos: ');
  const alunosComMedia = alunos.map(aluno => {
    const somaNotas = aluno.notas.reduce((soma, nota) => soma + nota, 0);
    const media = somaNotas / aluno.notas.length;
  
    return { nome: aluno.nome, media: media.toFixed(2) };
  });
  
  console.log(alunosComMedia);


  