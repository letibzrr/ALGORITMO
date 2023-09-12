let votosTotal, votosBrancos, votosCandidato, candidato, sair
alert("Digite 0 caso desejar sair do site")
do{
    candidato=Number(prompt("(1, 2, 3, 4: Candidatos)/n (5: Voto Branco)/n (6: Voto Nulo)/n Digite seu voto:"))
    if(candidato<=0 || candidato>=7 || isNaN(candidato)){
        alert("Voto inválido")
    }
    sair = confirm("Confirma a saída?")
    if(sair){
        break
    }else{
        continue
    }
}while(candidato<=0 || candidato>=7 || isNaN(candidato))

