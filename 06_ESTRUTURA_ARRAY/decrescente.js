let vetor=[]
let aux
     for(let i=0; i<10; i++){
        vetor[i]=Number(prompt("Digite um valor para o índice "+i+" do vetor: "))
     }console.log("Valor inicial: "+vetor)
     for(let i=0; i<10; i++){
      //algoritmo sequencial
      for(let j=0; j<10; j++){//j e i são iguais,ambos representam os índices
         if(vetor[j]<vetor[j+1]){
            aux=vetor[j] 
            vetor[j]=vetor[j+1]
            vetor[j+1]=aux 
         }
      }
     }console.log("Valor final: "+vetor)
   //console.log("Valor final: "+vetor.sort((a,b)=>b-a)) 
   //sort é uma função nativa do javascript
   //b-a é decrescente
   //a-b é crescente 


    