let idade, maiorIdade=0
const idades=[]
do{
    idade=prompt("Digite uma idade ou digite (sair) para encerrar: ")
    idades.push(idade)
}while(idade!="sair")
idades.pop()
for(let i=0; i<idades.length; i++){
    if(idades[i]>maiorIdade)
    maiorIdade=idades[i] 
}
console.log("A maior idade é "+maiorIdade)
console.log("Idades: "+idades)
