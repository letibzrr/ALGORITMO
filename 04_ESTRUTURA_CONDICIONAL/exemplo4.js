let valor

valor = Number(prompt("Digite um valor"))

if(isNaN (valor)){
    alert("Valor inválido \nDigite novamente")
    location.reload() 
} 

if(valor%2===0){
    alert(+valor+" é par")
}else{
    alert(+valor+" é ímpar") 
} 