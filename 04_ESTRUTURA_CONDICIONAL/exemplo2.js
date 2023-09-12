let valor, raiz
valor = Number(prompt("Digite um valor: "))

if(isNaN (valor) || valor<=0){
    alert("Digite novamente")
    location.reload() 
}
raiz = Math.sqrt(valor)

if(raiz===Math.floor(raiz)){
    alert("A raiz quadrada é " +raiz)
}else{
    alert("A raiz não é exata")
} 


