const n = parseInt(prompt("Digite um número: "))
let divisores=0
do{
    if(n<=0 || isNaN(n)){
        alert("Valor inválido")
        location.reload() 
    }
}while(n<=0 || isNaN(n))

for(let i=1; i<n; i++){
    if(n%i===0){
      divisores +=i;
    }
} 
if(divisores===n){
    alert("Perfeito: "+n)
}else{
    alert("O número "+n+ " não é perfeito")
}