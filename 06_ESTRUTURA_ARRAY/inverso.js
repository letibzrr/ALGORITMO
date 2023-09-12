let n, vetor = []
n= Number(prompt("Digite a quantidade de números para o cadastramento no Array"))
for(i=0; i<n; i++){
    vetor[i] = Number(prompt("Digite um valor para o índice "+i+" do vetor: "))
}console.log(vetor)
for(let i=n-1; i>=0; i--){
    console.log(vetor[i])
}
