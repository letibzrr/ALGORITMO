let produto
const produtos=[]
do{
    produto=prompt("Digite os produtos ou se desejar encerrar a aplicação, digite sair: ")
    produtos.push(produto) //adiciona item ao array
}while(produto!="sair")
produtos.pop() //remove último item do array 
console.log(produtos)
