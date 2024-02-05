//Desafio 1 = Função que exibe "Olá, mundo!" no console
function saudacao() {
    return "Olá, mundo!";
}

let paragrafoElemento = document.querySelector('p');// Cria um elemento de parágrafo <p>

paragrafoElemento.innerHTML = saudacao();// Define o texto do parágrafo usando a função saudacao()


///**Desafio 2 = Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero){
    return numero * 2; // dobrar numero 
}

let resultado = dobrarNumero(20);// Substitua 5 pelo número que deseja dobrar
console.log(resultado);// Isso imprimirá o dobro do número no console*/


//**Desafio 3 = Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(num1, num2, num3) {
   let somaValores = (num1 + num2 + num3 )/ 3; 
    return somaValores;
}

let resultadoMedia = calcularMedia( 50, 30 , 40  );
console.log(resultadoMedia);


//** Desafio 4 =  Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
let num1 = 10;
let num2 = 30 ;

function calcularMaiorNumero(num1 , num2){
    if (num1 > num2) {
        return num1
    } else { 
        return num2
    }
}

let retornarMaiorNumero = calcularMaiorNumero(num1 , num2);
console.log("O maior número é " + retornarMaiorNumero);


//** Desafio 5 = Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let numero = 100;
let multiplicarNumero = numero * numero;
console.log(multiplicarNumero);


