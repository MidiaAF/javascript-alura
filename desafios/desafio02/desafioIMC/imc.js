//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:
function calculoIMC( peso, altura){
   const imc =  peso / ( altura * altura);
    return imc.toFixed(2);
}

let peso = 72.900; // Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let altura = 1.65;
const resultado = calculoIMC (peso,altura); 
console.log( `O seu peso como IMC é ${resultado}, `) ;

////////Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarEmReal(valorDolar){
    let valorcotacaoDolar = 4.80 ;
    let valorReal = valorDolar * valorcotacaoDolar  ; // // Calcula o valor em reais
    return valorReal;
} 

let valorDolar = 20;
const resultadoCotacao = converterDolarEmReal ( valorDolar);
console.log(resultadoCotacao);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetro(altura, largura) {
    let area =  altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`A área da sala: ${area} metros quadrados`);
    console.log(`Perimetroda sala: ${perimetro} metros`);
}

let valorAltura = 15;
let largura = 8;
areaPerimetro(altura,largura);

//////////////////Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaPerimetroSalaCircular(raio) {
    let areaSala = Math.PI * raio * raio;
    let perimetroSala = 2 * MathPI * raio;
    console.log( `A área da sala é: ${areaSala} `);
    console.log( `A área da sala é: ${perimetroSala} `);
}
  
let raio = 50;
areaPerimetroSalaCircular(raio);



//////Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada (numero){
    for ( let i = 1 ; i<= 10 ; i++){;
   let resultado = numero * i;
      console.log(`${numero} * ${i} = ${resultado}`);
}      
}

let numero = 10;
tabuada(numero)


