let vetor1=[], positivo=[], negativo=[] 
let count_positivo=0, count_negativo=0

     for(let i=0; i<8; i++){
        vetor1[i]=Number(prompt("Digite um valor para o índice "+i+" do vetor: "))
        if(isNaN(vetor1)){
            alert("Valor inválido")
            location.reload() 
        }
    
        if(vetor1[i]>=0){
            positivo[count_positivo]=vetor1[i]
            count_positivo++
        }else{
            negativo[count_negativo]=vetor1[i]
            count_negativo++
        }
    }

    if(positivo.length<0){
        alert("Vetor positivo vazio")
    }else{
        for(let i=0; i<positivo.length; i++)
        document.write(positivo[i])
    }

    if(negativo.length<0){
        for(let i=0; i<negativo.length; i++)
        alert("Vetor negativo vazio")
    }else{
        document.write(negativo[i])
    }

    