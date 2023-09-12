alert("Digite 0 caso desejar sair do site")
do{
    let n = Number(prompt("Digite um valor"))
    if(n===0 || isNaN(n)){
        let sair = confirm("Confirma a saída?")
        if(sair){
            break
        }else{
            continue
        }
    }
    if(n%2===0){
        alert("Par: "+n+ " Dobro "+(n*2))
    }else{
        alert("Ímpar: "+n+ " Triplo "+(n*3))
    }
    
}while(true) 