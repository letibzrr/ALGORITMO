let n = []
     n[0] = 42
     n[4] = 89
     n[2] = 21
     n[1] = 56
        //n[1] = Number(prompt("Digite um número: "))
        //console.log(n[1]), evidenciar algum número em especifico [1] //56
        //console.log(n[0]+n[4]+n[2]+n[1]) //208, a soma dos valores
        //console.log(n[1]+10) //66
    console.log(n)

    let n = []
     for(let i=0; i<12; i++){
        n[i] = Number(prompt("Digite um valor para o índice"+i+"  do vetor"))
     }
     console.log(n)


     for(let i=0; i<12; i++){
        console.log(n[i]+"\n")//listar os valores do array
     }
