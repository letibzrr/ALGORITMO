let modelo, preco, entrada, saldo 

modelo = prompt("Digite o modelo do carro: ") 
preco = prompt("Digite o preço do carro: ") 

preco = Number(preco)

entrada = preco/2
saldo = entrada/12

alert("A entrada do "+modelo+" será: "+entrada.toFixed(3)+ " e o saldo em 12x será no valor de: "+saldo.toFixed(3)) 