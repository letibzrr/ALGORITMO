let gabarito=[], gabaritoAluno=[];
let alunoIdd, alunoQtd, percentualAprv
let pontos=0; totalAprv=0
for(let i=0; i<10; i++){
    gabarito[i]=prompt(`Digite o gabarito correto da questão ${i+1}: `)
}document.write(`${gabarito}<br>`);
alunoQtd=Number(prompt("Digite a quantidade de alunos: "))
for(let i=0; i<alunoQtd; i++){
    alunoIdd=Number(prompt("Digite o número de identificação do aluno: "));
    pontos=0
    for(let j=0; j<10; j++){
        gabaritoAluno[j]=prompt(`Digite o gabarito do aluno da questão ${j+1}: `)
        if(gabarito[j]===gabaritoAluno[j]){
            pontos++;
        }
        if(pontos>=6){
            totalAprovado++;
        }
    }
    document.write(`A nota do aluno ${alunoIdd} foi ${pontos.toFixed(2)}<br>`)
}
percentualAprv=(totalAprv*100)/alunoQtd
document.write(`O percentual de aprovados é ${percentualAprv}%`)
