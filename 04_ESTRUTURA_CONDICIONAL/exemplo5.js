let velocidadeC, velocidadeP, multa

velocidadeP = Number(prompt("Digite a velocidade permitida: "))
if(isNaN (velocidadeP) || velocidadeP<=0){
    alert("Velocidade não encontrada")
    location.reload() 
} 
velocidadeC = Number(prompt("Digite a velocidade do condutor: "))
if(isNaN (velocidadeC) || velocidadeC<=0){
    alert("Velocidade não encontrada")
    location.reload() 
} 

multa = velocidadeP*1.2

if(velocidadeC<=velocidadeP){
    alert("Sem Multa")
}else if(velocidadeC>velocidadeP && velocidadeC<=multa){
    alert("Multa Leve") 
}else if(velocidadeC>multa){
    alert("Multa Grave")
} 