let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; // começar pelo 1 de tentativas


function exibirTextoNaTela(tag, texto) { // criando a função dos textos 
    let campo = document.querySelector(tag); // tag o que eles tem em comum e texto o que tem diferente
    campo.innerHTML = texto;//descrever texto 
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo do número secreto'); // chamando a function criada sobre os textos
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();


function verificarChute() { // 
    let chute = document.querySelector('input').value; // pegar informação o valor digitado
    if ( chute  == numeroSecreto) { // chutar numero 
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa' ;  // se numeroque colocar for maior que 1 tentativas menor ou tentativa 
        let mensagemTentativas = `Voc ê descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; // numero: 1 de tentativas 
        exibirTextoNaTela('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');//desabilitar um button
    }else{
        if(chute > numeroSecreto){
           // exibirTextoNaTela('h1', 'Errou');
            exibirTextoNaTela ('p', 'O número secreto é menor ');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;//incrementar quantidade de tentativas
        limparCampo();
    }

    console.log(chute == numeroSecreto);
   //console.log(numeroSecreto); // numero esta secreto quando clicar em chutar 
    
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);//partInt= numeros inteiros retornar numeros aleatoriso true e false /// 
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); 
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);// só habilitar quando for um novo jogo 
}





//let titulo = document.querySelector(' h1')
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';