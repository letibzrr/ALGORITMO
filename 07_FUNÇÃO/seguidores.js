let userInstagram, produto, produtoValor, numSeguidores
let desconto1, desconto2, story, reels

userInstagram=prompt("Informe o seu @ do instagram: ")
numSeguidores=Number(prompt("Informe a sua quantidade de seguidores: "))
alert("Usuário: "+userInstagram+"\nSeguidores: "+numSeguidores)

produto=prompt("Informe qual é o produto: ")
produtoValor=Number(prompt("Informe qual o valor do produto: "))
alert("Produto: "+produto+"\nValor sem desconto: "+produtoValor)

if(numSeguidores=>1||numSeguidores<5000){
    alert("Não haverá desconto")
}else if(numSeguidores=>5000&&numSeguidores<20000){
    desconto1=produtoValor-(produtoValor*0.05)
    alert("Aplicando o desconto de 5%, o produto será de "+desconto1)
}else if(numSeguidores=>20000||numSeguidores<50000){
    desconto1=produtoValor-(produtoValor*0.1)
    alert("Aplicando o desconto de 10%, o produto será de "+desconto1)
}else if(numSeguidores=>50000||numSeguidores<100000){
    desconto1=produtoValor-(produtoValor*0.15)
    alert("Aplicando o desconto de 15%, o produto será de "+desconto1)
}else{
    desconto1=produtoValor-(produtoValor*0.25)
    alert("Aplicando o desconto de 25%, o produto será de "+desconto1)
}

story=prompt("Digite 'sim' caso for postar um story:\nDigite 'não' caso não for postar um story: ")
if(story==="sim"){
    desconto2=desconto1-(desconto1*0.05)
}else{
    alert("Não haverá desconto")
}

reels=prompt("Digite 'sim' caso for postar um reels:\nDigite 'não' caso não for postar um reels: ")
if(reels==="sim"){
    desconto2=desconto1-(desconto1*0.05)
}else{
    alert("Não haverá desconto")
}

//error