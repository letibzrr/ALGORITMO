let nIdentificador, peçasMes, sexoOpr, classeOpr, salario1, salario2, salario3, salarioTotal, sexo1Media, sexo2Media
const salarioMin=1000 //operarios=15
//validação
do{
    nIdentificador = Number(prompt("Digite o número de identificação do operário/a (ex: 1): "))
    if(nIdentificador<=0 || isNaN(nIdentificador)){
        alert("Identificador inválido")
      location.reload()    
    }
    peçasMes = Number(prompt("Digite o número de peças fabricadas por mês (ex: 10): "))
    if(peçasMes<=0 || isNaN(peçasMes)){
        alert("Peças inválidas")
        location.reload() 
    }
    sexoOpr = prompt("Digite o sexo do operário/a (Masculino digite 1 e feminino digite 2): ")
    if(sexoOpr<=0 || sexoOpr>=3 || isNaN(sexoOpr)){
        alert("Sexo inválido")
        location.reload() 
    }
    classeOpr = prompt("Digite a classe do operário/a (Classe um digite 1, classe dois digite 2 ou classe três digite 3): ")
    if(classeOpr<=0 || classeOpr>=4){
        alert("Classe inválida")
        location.reload() 
    }
}while(nIdentificador<=0 || isNaN(nIdentificador))
//lógica
//número do operário e seu salário
    if(classeOpr==="1"){
        salario1=salarioMin
        console.log("O operário "+nIdentificador+" recebe um salário de R$"+salario1)
    }else if(classeOpr==="2"|| peçasMes>20){
        salario2=salarioMin+(salarioMin*0.3)
        console.log("O operário "+nIdentificador+" recebe um salário de R$"+salario2)
    }else if(classeOpr==="3"|| peçasMes>30){
        salario3=salarioMin+(salarioMin*0.5)
        console.log("O operário "+nIdentificador+" recebe um salário de R$"+salario3)
    }
//folha total de pagamento
salarioTotal=salarioTotal+salario1+salario2+salario3
console.log("Folha de pagamento: "+salarioTotal)
//média de peças feitas por homens e média das mulheres
if(sexoOpr==="1"){
    sexo1Media=sexo1Media+peçasMes
    console.log("A média de peças feitas por homens é: "+sexo1Media)
}else{
    sexo2Media=sexo2Media+peçasMes
    console.log("A média de peças feitas por mulheres é: "+sexo2Media)
}
//número de operário/a de maior sálario 



