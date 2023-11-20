const prompt = require ("prompt-sync")({sigint: true})
//Desafio 02 - Aprovação de Empréstimo

// const salario = Number(prompt("Digite seu salário: "))
// const scoreDeCredito = Number(prompt("Digite seu score de crédito: "))
// const idade = Number(prompt("Digite sua idade: "))

// const fazerEmprestimo = (salario >= 5000 && scoreDeCredito >= 700 && idade >= 18)

// console.log(fazerEmprestimo);



//Desafio 03 - Verificar Compatibilidade de Plataformas

// const navegador = prompt("Digite o nome do navegador você usa: ")
// const sistemaOperacional = prompt("Digite o nome do SO que você usa: ")

// const verificarCompatibilidade = (navegador == 'Chrome' || navegador == 'Firefox' && sistemaOperacional == 'Windows' || sistemaOperacional == 'Mac')

// console.log(verificarCompatibilidade);



//Desafio 04 - Verificar Elegibilidade para Desconto em Compra

const idade = 60
const compraMinima = 120
const isNewClient = false


const elegivelParaDesconto = (idade >= 60 && compraMinima >= 100 &&  isNewClient == false)

console.log(elegivelParaDesconto);


                    
                         
                         