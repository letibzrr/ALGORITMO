let userInstagram=prompt("Informe o seu @ do instagram: ")
let numSeguidores=Number(prompt("Informe a sua quantidade de seguidores: "))
let produto=prompt("Informe qual é o produto: ")
let produtoValor=Number(prompt("Informe qual o valor do produto: "))

console.log("Usuário:"+userInstagram+"\nSeguidores:"+numSeguidores+"\nProduto:"+produto+"\nValor sem desconto:"+produtoValor)

let descontoMedia
function calcularDesconto(numSeguidores, produtoValor, descontoMedia) {
    debugger;
    if(numSeguidores<5000){
        console.log("Não haverá desconto")
    }else if(numSeguidores=>5000||numSeguidores<20000){
        descontoMedia=(produtoValor-(produtoValor*0.05))
        console.log("Aplicando o desconto de 5%, o produto será de "+descontoMedia)
    }else if(numSeguidores=>20000||numSeguidores<50000){
        descontoMedia=(produtoValor-(produtoValor*0.1))
        console.log("Aplicando o desconto de 10%, o produto será de "+descontoMedia)
    }else if(numSeguidores=>50000||numSeguidores<100000){
        descontoMedia=(produtoValor-(produtoValor*0.15))
        console.log("Aplicando o desconto de 15%, o produto será de "+descontoMedia)
    }else if(numSeguidores>100000){
        descontoMedia=(produtoValor-(produtoValor*0.25))
        console.log("Aplicando o desconto de 25%, o produto será de "+descontoMedia)
    }
    return descontoMedia
}console.log(calcularDesconto("O desconto de acordo com a quantidade de "+numSeguidores+" será de: "+descontoMedia))

let storyDes,reelsDes
let story=prompt("Digite 'sim' caso for postar um story:\nDigite 'não' caso não for postar um story: ")
let reels=prompt("Digite 'sim' caso for postar um reels:\nDigite 'não' caso não for postar um reels: ")

function calcularPostagem(story, reels, storyDes, reelsDes) {
    if(story==="sim"){
    storyDes=(descontoMedia-(descontoMedia*0.05));
    console.log("Story: "+storyDes)
}else if(reels==="sim"){
    reelsDes=(descontoMedia-(descontoMedia*0.10));
    console.log("reels: "+reelsDes)
}
}console.log(calcularPostagem("O desconto do story: "+storyDes+"\nO desconto do reels: "+reelsDes))

