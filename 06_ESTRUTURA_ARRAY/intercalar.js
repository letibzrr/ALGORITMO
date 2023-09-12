let vetor1=[], vetor2=[], vetor3=[]  
let j=0 
     for(let i=0; i<5; i++){
        vetor1[i] = Number(prompt("Digite um valor para o índice "+i+" do primeiro vetor: "))
        vetor3[j] = vetor1[i]
        j++
        vetor2[i] = Number(prompt("Digite um valor para o índice "+i+" do segundo vetor: "))
        vetor3[j] = vetor2[i] 
        j++ 
     }
     console.log("Primeiro vetor: "+vetor1)
     console.log("Segundo vetor: "+vetor2)

     for(let i=0; i<vetor3.length; i++){
        console.log("Terceiro vetor: "+vetor3)
     }
     