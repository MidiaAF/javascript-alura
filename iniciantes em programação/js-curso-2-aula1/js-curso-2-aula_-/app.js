let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) { // criando a função dos textos 
    let campo = document.querySelector(tag); // tag o que eles tem em comum e texto o que tem diferente
    campo.innerHTML = texto;//descrever texto 
}

exibirTextoNaTela('h1' , 'Jogo do número secreto'); // chamando a function criada sobre os textos
exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');

function verificarChute() { // 
    let chute = document.querySelector('input').value; // pegar informação o valor digitado
    console.log(chute == numeroSecreto);
   //console.log(numeroSecreto); // numero esta secrteo quando clicar em chutar 
    
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);//partInt= numeros inteiros /// 
}









//let titulo = document.querySelector(' h1')
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';