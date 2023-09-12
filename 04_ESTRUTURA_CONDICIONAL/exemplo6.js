let lado1, lado2, lado3 

//lado = lado = lado : equilátero
//lado = lado != lado : isósceles
//lado != lado != lado : escaleno  

lado1 = Number(prompt("Digite o valor do primeiro lado:"))
if(isNaN (lado1) || lado1>(lado2+lado3) || lado1<=0){
    alert("Valor Inválido")
    location.reload() 
}
lado2 = Number(prompt("Digite o valor do segundo lado:"))
if(isNaN (lado2) || lado2>(lado3+lado2) || lado2<=0){
    alert("Valor Inválido")
    location.reload() 
}
lado3 = Number(prompt("Digite o valor do terceiro lado:"))
if(isNaN (lado3) || lado3>(lado1+lado2) || lado3<=0){
    alert("Valor Inválido")
    location.reload() 
}

if(lado1===lado2 && lado1===lado3){
    alert("triângulo equilátero")
}else if(lado1===lado2 || lado1===lado3 || lado2===lado3){
    alert("triângulo isósceles")
}else{
    alert("triângulo escaleno")
}

