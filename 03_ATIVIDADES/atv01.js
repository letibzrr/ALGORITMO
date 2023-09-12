let titulo, duracao, minutos, horas 

titulo = prompt("Digite o nome do filme: ") 
duracao = prompt("Digite a duração do filme em minutos: ") 

minutos = Number(minutos)  

horas = Math.floor(duracao/60)
minutos = duracao%60 

alert("O filme "+titulo+" possui a duração de "+horas+"h" +minutos+ "min") 