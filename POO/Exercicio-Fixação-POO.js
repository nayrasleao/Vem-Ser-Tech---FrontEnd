// 🚀 Exercício 1: Explorador Espacial
// Crie uma classe NaveEspacial com atributos como nome, velocidade máxima e capacidade de tripulação. Implemente métodos como acelerar() e adicionarTripulante().


// class NaveEspacial {
//   constructor(nome, velocidadeMax, capacidadeTrip) {
//     this.nome = nome;
//     this.velocidadeMaxima = velocidadeMax;
//     this.capacidadeTrip = capacidadeTrip;
//     this.tripulacao = [];
//     this.velocidadeAtual = 0;
//   }

//   acelerar() {
//     this.velocidadeAtual += 10;
//     console.log(
//       `Velocidade atual: ${this.velocidadeAtual}`
//     );
//   }

//   adicionarTripulante(nomeTripulante) {
//     if (this.tripulacao.length < this.capacidadeTrip) {
//       this.tripulacao.push(nomeTripulante);
//       console.log(
//         `${nomeTripulante} foi adicionado à tripulação.`
//       );
//     } else {
//       console.log(
//         `A tripulação da nave ${this.nome} está completa. Não é possível adicionar mais tripulantes.`
//       );
//     }
//   }
// }


// const minhaNave = new NaveEspacial("Estelar", 1000, 5);
// minhaNave.acelerar();
// minhaNave.adicionarTripulante("Piloto1");
// minhaNave.adicionarTripulante("Piloto2");
// minhaNave.adicionarTripulante("Piloto3");
// minhaNave.adicionarTripulante("Piloto4");
// minhaNave.adicionarTripulante("Piloto5");
// minhaNave.adicionarTripulante("Piloto6");
// minhaNave.acelerar();




// Exercício 2: Mundo dos Dragões
// Desenvolva uma classe Dragao com atributos como nome, cor, elemento (fogo, gelo, etc.) e nível de saúde. Inclua métodos como voar(), cuspirFogo() e comer().


// class Dragao {
//     constructor(nome, cor, elemento, nivelSaude) {
//         this.nome = nome;
//         this.cor = cor;
//         this.elemento = elemento;
//         this.nivelSaude = nivelSaude;
//     }

//     voar() {
//         console.log(`${this.nome} está voando pelo céu.`);
//     }

//     cuspirFogo() {
//         if (this.elemento === "fogo") {
//             console.log(`${this.nome} está cuspindo fogo!`);
//         } else {
//             console.log(`${this.nome} não pode cuspir fogo, pois é do elemento ${this.elemento}.`);
//         }
//     }

//     comer() {
//         this.nivelSaude += 10;
//         console.log(`Nível de saúde atual do ${this.nome} : ${this.nivelSaude}`);
//     }
// }

// const meuDragao = new Dragao("Trojan", "Preto", "fogo", 80);
// meuDragao.voar();
// meuDragao.cuspirFogo();
// meuDragao.comer();




// 🎮 Exercício 3: Console de Jogos Retro
// Projete uma classe ConsoleRetro com atributos como nome, ano de lançamento e jogos disponíveis. Adicione métodos para adicionarJogo() e jogar().


// class ConsoleRetro {
//     constructor(nome, anoLancamento) {
//         this.nome = nome;
//         this.anoLancamento = anoLancamento;
//         this.jogosDisponiveis = [];
//     }

//     adicionarJogo(nomeJogo) {
//         this.jogosDisponiveis.push(nomeJogo);
//         console.log(`O jogo ${nomeJogo} foi adicionado aos jogos disponíveis para o ${this.nome}.`);
//     }

//     jogar(nomeJogo) {
//         if (this.jogosDisponiveis.includes(nomeJogo)) {
//             console.log(`Jogando ${nomeJogo}.`);
//         } else {
//             console.log(`O jogo ${nomeJogo} não está disponível para o ${this.nome}.`);
//         }
//     }
// }


// const meuConsole = new ConsoleRetro("Super Retro", 1990);
// meuConsole.adicionarJogo("Super Mario Bros");
// meuConsole.adicionarJogo("The Legend of Zelda");
// meuConsole.jogar("Super Mario Bros");
// meuConsole.jogar("GTA");



// 🏞️ Exercício 4: Parque Ecológico Virtual
// Crie uma classe ParqueEcológico com atributos como nome, localização e tipos de fauna e flora. Implemente métodos para adicionarEspécie() e organizarTourVirtual().



// class ParqueEcológico {
//     constructor(nome, localizacao) {
//         this.nome = nome;
//         this.localizacao = localizacao;
//         this.fauna = [];
//         this.flora = [];
//     }

//     adicionarEspécie(tipo, nomeEspecie) {
//         if (tipo === 'fauna') {
//             this.fauna.push(nomeEspecie);
//             console.log(`Nova espécie de fauna, ${nomeEspecie}, adicionada ao ${this.nome}.`);
//         } else if (tipo === 'flora') {
//             this.flora.push(nomeEspecie);
//             console.log(`Nova espécie de flora, ${nomeEspecie}, adicionada ao ${this.nome}.`);
//         } else {
//             console.log('Tipo de espécie inválido. Use "fauna" ou "flora".');
//         }
//     }

//     organizarTourVirtual() {
//         console.log(`Iniciando tour virtual no ${this.nome}!`);
//         console.log(`Fauna: ${this.fauna.join(', ')}`);
//         console.log(`Flora: ${this.flora.join(', ')}`);
//     }
// }


// const meuParque = new ParqueEcológico("Parque da Natureza", "Amazonas");
// meuParque.adicionarEspécie('fauna', 'Onça');
// meuParque.adicionarEspécie('fauna', 'Tucano');
// meuParque.adicionarEspécie('flora', 'Orquídea');
// meuParque.organizarTourVirtual();


// 🍔 Exercício 5: Simulador de Restaurante
// Elabore uma classe Restaurante com atributos como nome, tipo de culinária e menu. Inclua métodos como adicionarPratoNoMenu() e receberPedido().


// class Restaurante {
//     constructor(nome, tipoCulinaria) {
//         this.nome = nome;
//         this.tipoCulinaria = tipoCulinaria;
//         this.menu = [];
//     }

//     adicionarPratoNoMenu(prato) {
//         this.menu.push(prato);
//         console.log(`Novo prato "${prato}" adicionado ao menu do ${this.nome}.`);
//     }

//     receberPedido(prato) {
//         if (this.menu.includes(prato)) {
//             console.log(`Pedido do prato "${prato}" recebido no ${this.nome}.`);
//             // Lógica para preparar o pedido iria aqui
//             console.log(`Pedido do prato "${prato}" pronto! Aproveite sua refeição.`);
//         } else {
//             console.log(`Desculpe, o prato "${prato}" não está disponível no menu do ${this.nome}.`);
//         }
//     }
// }


// const meuRestaurante = new Restaurante("Sabor Divino", "Italiana");
// meuRestaurante.adicionarPratoNoMenu("Pizza Queijo");
// meuRestaurante.adicionarPratoNoMenu("Pasta Carbonara");
// meuRestaurante.receberPedido("Pizza Queijo");
// meuRestaurante.receberPedido("Lasanha");



// Exercício 6: Clube de Astronomia
// Crie uma classe ClubeAstronomia com atributos como nome, local e membros. Desenvolva métodos para realizarObservacao() e organizarEventosEstelares().


// class ClubeAstronomia {
//     constructor(nome, local) {
//         this.nome = nome;
//         this.local = local;
//         this.membros = [];
//     }

//     realizarObservacao(membro, objetoCeleste) {
//         if (this.membros.includes(membro)) {
//             console.log(`${membro} está realizando uma observação de ${objetoCeleste} no ${this.nome}.`);
//         } else {
//             console.log(`Desculpe, ${membro} não é membro do ${this.nome}.`);
//         }
//     }

//     organizarEventosEstelares() {
//         console.log(`Organizando evento estelar no ${this.nome} em ${this.local}.`);
//     }
// }

// const meuClubeAstronomia = new ClubeAstronomia("Observadores do Céu", "Observatório Municipal");
// meuClubeAstronomia.membros = ["Nay", "Mary", "Jane"];

// meuClubeAstronomia.realizarObservacao("Mary", "a Lua");
// meuClubeAstronomia.realizarObservacao("Jane", "uma estrela distante");

// meuClubeAstronomia.organizarEventosEstelares();



// 🏰 Exercício 7: Construtor de Castelos
// Projete uma classe ConstrutorCastelos com atributos como nome, estilo arquitetônico e materiais usados. Implemente métodos para construirTorre() e adicionarAposentos().


// class ConstrutorCastelos {
//     constructor(nome, estiloArquitetonico) {
//         this.nome = nome;
//         this.estiloArquitetonico = estiloArquitetonico;
//         this.materiaisUsados = [];
//         this.aposentos = [];
//     }

//     construirTorre(torreNome) {
//         const torre = `Torre ${torreNome}`;
//         this.materiaisUsados.push(`Pedras para ${torre}`);
//         console.log(`${torre} construída no ${this.nome}.`);
//     }

//     adicionarAposentos(aposentoNome, quantidade) {
//         for (let i = 1; i <= quantidade; i++) {
//             const aposento = `${aposentoNome} ${i}`;
//             this.aposentos.push(aposento);
//             this.materiaisUsados.push(`Madeira para ${aposento}`);
//             console.log(`Novo aposento "${aposento}" adicionado ao ${this.nome}.`);
//         }
//     }
// }


// const meuConstrutor = new ConstrutorCastelos("Castelo de Código", "Gótico");

// meuConstrutor.construirTorre("Norte");
// meuConstrutor.adicionarAposentos("Quarto", 3);

// console.log(`Materiais usados: ${meuConstrutor.materiaisUsados.join(', ')}`);
// console.log(`Aposentos construídos: ${meuConstrutor.aposentos.join(', ')}`);

//  Exercício 8: Estúdio de Arte Digital
// Desenvolva uma classe EstudioArteDigital com atributos como nome, equipamentos e obras de arte. Inclua métodos para criarArteDigital() e exporObras().

// class EstudioArteDigital {
//     constructor(nome) {
//         this.nome = nome;
//         this.equipamentos = [];
//         this.obrasDeArte = [];
//     }

//     criarArteDigital(nomeObra, tipoArte) {
//         const obra = `${nomeObra} - ${tipoArte}`;
//         this.obrasDeArte.push(obra);
//         console.log(`Nova obra de arte digital "${obra}" criada no ${this.nome}.`);
//     }

//     exporObras() {
//         console.log(`Expondo obras de arte digitais no ${this.nome}:`);
//         this.obrasDeArte.forEach((obra, index) => {
//             console.log(`${index + 1}. ${obra}`);
//         });
//     }
// }


// const meuEstudio = new EstudioArteDigital("Hashteck Studios");

// meuEstudio.equipamentos = ["Tablet gráfico", "Computador", "Software de design"];

// meuEstudio.criarArteDigital("Retrato Futurista", "Digital Painting");
// meuEstudio.criarArteDigital("Composição Abstrata", "Generative Art");

// meuEstudio.exporObras();






// Exercício 9: Explorador de Oceano Profundo
// Crie uma classe ExploradorOceanoProfundo com atributos como nome, submarino e descobertas submarinas. Implemente métodos para mergulhar(), coletarAmostras() e estudarCriaturasMarinhas().

// class ExploradorOceanoProfundo {
//     constructor(nome, submarino) {
//         this.nome = nome;
//         this.submarino = submarino;
//         this.descobertasSubmarinas = [];
//     }

//     mergulhar() {
//         console.log(`${this.nome} está mergulhando nas profundezas do oceano com o submarino ${this.submarino}.`);
//     }

//     coletarAmostras(local) {
//         const amostra = `Amostra de ${local}`;
//         this.descobertasSubmarinas.push(amostra);
//         console.log(`${this.nome} coletou uma amostra em ${local}.`);
//     }

//     estudarCriaturasMarinhas() {
//         console.log(`${this.nome} está estudando as criaturas marinhas descobertas:`);
//         this.descobertasSubmarinas.forEach((amostra, index) => {
//             console.log(`${index + 1}. ${amostra}`);
//         });
//     }
// }

// const meuExplorador = new ExploradorOceanoProfundo("Profundo Aventureiro", "Submarino Amarelo");

// meuExplorador.mergulhar();
// meuExplorador.coletarAmostras("Amostra 1");
// meuExplorador.coletarAmostras("Amostra 2");
// meuExplorador.estudarCriaturasMarinhas();



// 🍦 Exercício 10: Sorveteria Mágica
// Elabore uma classe SorveteriaMagica com atributos como nome, sabores e varinhas mágicas. Desenvolva métodos para criarSorveteMagico() e realizarFeitiçosGelados().

class SorveteriaMagica {
    constructor(nome) {
        this.nome = nome;
        this.sabores = [];
        this.varinhasMagicas = [];
    }

    criarSorveteMagico(sabor, varinhaMagica) {
        const sorvete = `Sorvete Mágico de ${sabor}`;
        this.sabores.push(sorvete);
        this.varinhasMagicas.push(varinhaMagica);
        console.log(`Novo ${sorvete} foi criado na ${this.nome} com a varinha mágica ${varinhaMagica}.`);
    }

    realizarFeitiçosGelados() {
        console.log(`Realizando feitiços gelados na ${this.nome}!`);
        this.sabores.forEach((sorvete, index) => {
            const varinha = this.varinhasMagicas[index] || "sem varinha";
            console.log(`Feitiço gelado para ${sorvete} com a varinha ${varinha}.`);
        });
    }
}


const minhaSorveteria = new SorveteriaMagica("Magia do Gelado");

minhaSorveteria.criarSorveteMagico("Chocolate", "Varinha Estelar");
minhaSorveteria.criarSorveteMagico("Morango", "Varinha de Cristal");
minhaSorveteria.realizarFeitiçosGelados();










