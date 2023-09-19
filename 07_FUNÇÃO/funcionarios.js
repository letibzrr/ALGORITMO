let funcionarios=[], salario=[], tempoServico=[]
debugger;
//vetores
for(i=0; i<2; i++){
    funcionarios[i]=prompt("Digite o nome do "+i+" funcionário: ")
}
for(i=0; i<2; i++){
    salario[i]=Number(prompt("Digite o salário do "+i+" funcionário: "))
}
for(i=0; i<2; i++){
    salario[i]=Number(prompt("Digite o tempo de serviço do "+i+" funcionário: "))
}
//relatorio 1 e 2 
function salario_tempo(salario, tempoServico){
    if(salario>400||tempoServico<5){
        return alert("não haverá aumento do funcionnário: "+funcionarios)
    }else if(salario<400||tempoServico>5){
        return alert("haverá aumento do funcionnário: "+funcionarios)
    }
}alert(salario_tempo(salario, tempoServico))
//aumentos salariais
function aumentoSalario(salario, tempoServico){
    if(salario<400||tempoServico<5){
        return alert("O salário do funcionário: "+funcionarios+" será de "+salario*1.35)
    }else if(salario>400||tempoServico>5){
        return alert("O salário do funcionário: "+funcionarios+" será de "+salario*1.25)
    }else if(salario<400||tempoServico<5){
        return alert("O salário do funcionário: "+funcionarios+" será de "+salario*1.15)
    }
}alert(aumentoSalario(salario, tempoServico))

