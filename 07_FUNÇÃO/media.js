let x, y, z
x=Number(prompt("Digite um valor para x: "))
y=Number(prompt("Digite um valor para y: "))
z=Number(prompt("Digite um valor para z: "))

function calcularMedia(x, y, z){
    let media = (x+y+z)/3;
    return media;
}alert("A media é: "+calcularMedia(x, y, z)) 