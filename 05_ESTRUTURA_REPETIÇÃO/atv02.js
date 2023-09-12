let chinchilasInicial, chinchilasTotal, anos
do{
    chinchilasInicial = Number(prompt("Digite a quantidade inicial de chinchilas da fazenda: "))
    
    if(chinchilasInicial<2 || isNaN(chinchilasInicial)){
        alert("Número de chinchilas inválido. Digite novamente.")
        location.reload() 
    }
    anos = Number(prompt("Digite os anos para a criação das chinchilas: "))
    if(anos<=0 || isNaN(anos)){
        alert("Ano inválido. Digite novamente.")
        location.reload() 
    }
}while(chinchilasInicial<2 || isNaN(chinchilasInicial))

chinchilasTotal = chinchilasInicial
for(let i=2; i<=anos; i++){
    chinchilasTotal = chinchilasTotal * 3
}
alert("Em "+anos+ " anos, a quantidade de chinchilas será "+chinchilasTotal)

