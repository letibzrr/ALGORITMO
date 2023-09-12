let preçoKG, consumoG, valor

preçoKG = prompt("Digite o preço em kg: ")
consumoG = prompt("Digite o consumo em gramas: ")

valor = Number(valor)

valor = consumoG*preçoKG/1000

alert("O valor a ser pago será R$"+valor.toFixed(2))
