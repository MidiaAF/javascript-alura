//let titulo = document.querySelector(' h1')
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela (tag, texto) { // criando a função dos textos 
    let campo = document.querySelector(tag); // tag o que eles tem em comum e texto o que tem diferente
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1' , 'Jogo do número secreto'); // chamando a function criada sobre os textos
exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    console.log('o botão foi clicado!');
}