let idade, maiorIdade=0
const idades=[]
do{
    idade=prompt("Digite uma idade ou digite (sair) para encerrar: ")
    idades.push(idade)
}while(idade!="sair")
idades.pop()
let menorIdade=idades[0]
for(let i=0; i<idades.length; i++){
    if(idades[i]>maiorIdade)
    maiorIdade=idades[i] 
}
if(idade<menorIdade){
    menorIdade=idade
}
console.log("A maior idade é "+maiorIdade)
console.log("A menor idade é "+menorIdade)
console.log("Idades: "+idades)