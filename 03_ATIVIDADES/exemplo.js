//1) Declarar todas as variaveis 
let nome, anoNascimento, anoAtual, idade

//2) Atribuir todas as variaveis que irão receber valor 
nome = prompt("Digite o seu nome: ")
anoNascimento = prompt("Digite o seu ano de nascimento: ")
anoAtual = prompt("Digite o ano atual: ")

//3) Casting nas variaveis que possuem valor numerico
anoNascimento = parseInt(anoNascimento) 
anoAtual = Number(anoAtual) 

//4) Processar ou calcular as variaveis que possuem valor
idade = anoAtual - anoNascimento

//5) Mostrar o resultado 
 document.write(`Olá ${nome}, sua idade é ${idade} anos`) // exemplo 1
 alert("Olá "+nome+" sua idade é "+idade) // exemplo 2