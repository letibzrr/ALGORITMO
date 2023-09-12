let saque, n10, n50, n100, resto
//10, 20, 30, 40 = 10 
//50, 60, 70, 80, 90 = 10, 50 
// 100, 110, 120,... = 10, 50, 100
saque = Number(prompt("Digite o valor do saque: "))

if(isNaN(saque) || saque%10!=0){
    alert("Notas indisponíveis no sistema")
    location.reload() 
} 

if(saque%10===0){
    n100 = parseInt(saque/100)
    n50 = parseInt((saque%100)/50)
    n10 = parseInt(((saque%100)%50)/10) 
    alert("Notas 100: "+n100+ "\nNotas 50: "+n50+ "\nNotas 10: "+n10) 
}else{
    alert("Tente Novamente")
}



