let idade=Number(prompt("Digite uma idade: "))
function Maioridade(idade){
    if(idade>=18){
        alert(`Maior de idade: ${idade}`)
    }else{
        alert(`Menor de idade: ${idade}`)
    }
    return idade;
} 
alert(Maioridade(idade))


