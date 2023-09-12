let descricao, preco, valor, promocao

descricao = prompt("Digite a descrição do medicamento: ")
preco = prompt("Digite o preço do medicamento: ")

valor = (preco*2)-((preco*2)%2)

alert("O valor do medicamento "+descricao+ " na promoção será: "+valor.toFixed(2)) 
