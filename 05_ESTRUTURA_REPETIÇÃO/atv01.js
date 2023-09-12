let divisores=0, n
do{
    n = Number(prompt("Digite um valor: "))
    if(n<=0 || isNaN(n)){
        alert("Valor inválido. Digite novamente.")
        location.reload() 
    }
}while(n<=0 || isNaN(n))  

for(let i=0; i<=n; i++){
    if(n%i===0){
        divisores++
    }
}
if(divisores===2){
    console.log("O número "+n+" é primo")
}else{
    console.log("Não é primo: "+n)
}
alert("Divisores"+divisores)
