let n 
//validação
do{
    n = Number(prompt("Digite um valor"))
    if(n===0 || isNaN(n)){
        alert("Digite um valor válido!")
    }
}while(n===0 || isNaN(n))
//lógica
for(let i=0; i<=n; i++){
    if(i%2===0){
       console.log("Par: "+i)
    }
}