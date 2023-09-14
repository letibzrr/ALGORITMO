let mediaP, mediaA, sistemaNotas
let nota1, nota2, nota3, nota
const peso1=5, peso2=3, peso3=2, pesoTotal=10

do{
    sistemaNotas=prompt("Digite qual o seu sistema de notas? \nA - Aritmética\nP - Ponderada")
    if(sistemaNotas!="A"&&sistemaNotas!="P"&&sistemaNotas===""&&(sistemaNotas.length>2&&sistemaNotas.length<0)){
    alert("Sistema Inválido")
    }
}while(sistemaNotas!="A"&&sistemaNotas!="P"&&sistemaNotas===""&&(sistemaNotas.length>2&&sistemaNotas.length<0))

do{
    nota1=Number(prompt("Digite o valor da primeira nota: "))
    validarNota(nota1)
}while(nota1<0||nota1>10||isNaN(nota1))
do{
    nota2=Number(prompt("Digite o valor da segunda nota: "))
    validarNota(nota2)
}while(nota2<0||nota2>10||isNaN(nota2))
do{
    nota3=Number(prompt("Digite o valor da terceira nota: "))
    validarNota(nota3)
}while(nota3<0||nota3>10||isNaN(nota3))

function validarNota(nota){
    if(nota<0||nota>10||isNaN(nota)){
        alert("Nota inválida")
        return
    }
}

function calcularMedia(nota1, nota2, nota3){
    if(sistemaNotas==="A"){
        return mediaA=((nota1+nota2+nota3)/3).toFixed(1);
    }else if(sistemaNotas==="P"){
        return mediaP=(((nota1*peso1)+(nota2*peso2)+(nota3*peso3))/pesoTotal).toFixed(1);   
    }
}
alert(calcularMedia(nota1, nota2, nota3, sistemaNotas))






