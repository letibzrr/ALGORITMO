let idealHomem, idealMulher, genero, altura 

genero =(prompt("Digite qual seu genero: "))
altura = Number(prompt ("Digite sua altura: "))

if(genero == "homem"){
    idealHomem = 22*(altura*altura) 
    alert("O peso ideal é: "+idealHomem) 
}else if(genero == "mulher"){
    idealMulher = 21*(altura*altura) 
    alert("O peso ideal é: "+idealMulher)    
} 
 