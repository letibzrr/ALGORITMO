let idade, idadeMedia
const maiorIdade=18

for(i=1; i<=10; i++){
        idade=Number(prompt("Digite a idade: "))
        console.log("Idade: "+idade)
        if(idade<=0 || isNaN(idade)){
            alert("Idade Inválida")
        }
        if(idade>=maiorIdade){
            console.log("Os maiores de idade são: "+idade)
        }
    }
 //falta a media


