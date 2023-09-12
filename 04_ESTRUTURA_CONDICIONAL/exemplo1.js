let horaBrasil, horaFranca 

horaBrasil = Number(prompt("Digite o horário do Brasil no formato de (horas.minutos): "))
if(isNaN(horaBrasil) || horaBrasil<0 |horaBrasil == ""){
    alert("Digite um horário válido")
    location.reload()
}


horaFranca = horaBrasil + 5
if(horaFranca > 24){
    horaFranca = horaFranca - 24 
}
alert("Horário no Brasil: "+horaBrasil+ " - Horário na França: "+horaFranca)