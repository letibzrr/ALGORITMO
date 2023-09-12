let n1, n2, n3, n4, media 

n1 = Number(prompt ("Digite a primeira nota: ")) 
n2 = Number(prompt ("Digite a segunda nota: ")) 
n3 = Number(prompt ("Digite a terceira nota: ")) 
n4 = Number(prompt ("Digite a quarta nota: "))  

media = (n1+n2+n3+n4)/4 

debugger;
if(media>=7.0 && media<=10.0){
    alert("Aprovado")
}
else if(media>=1.0 && media<7.0){
    alert("Reprovado") 
} 