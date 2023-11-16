/*function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => { Substituí o loop while por forEach, tornando o código mais claro e legível.
    tecla.addEventListener('click', function() {/*Usei addEventListener para cada tecla, associando uma função de clique. A função pega a segunda classe da tecla (que é a classe que contém o nome do som) e constrói o ID do elemento de áudio correspondente.
        const somId = 'som_' + tecla.classList[1];
        tocaSom('#' + somId);
    });
});
*/


/*-----------ou-------------*/ 

function tocaSom(seletorAudio) {
   const elemento =  document.querySelector(seletorAudio);
   
    if(elemento && elemento.localName === 'audio'){       
            elemento.play();
        }
        else{
            console.log('Elemento não encontrado ou seletor inválido');
        }
       
    }


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

   for(let contador = 0 ; contador < listaDeTeclas.length; contador++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`;
     

        tecla.onclick = function () {
            tocaSom(idAudio);
    
    }    
/*usando o teclado como comando de acionar botton// O que são eventos do teclado e como usá-los: onkeydowne onkeyup. Como adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList*/
    tecla.onkeydown = function(evento) {/*quando aperta a tecla ativa a função */
    // console.log(evento.code == 'Space' )

        if(evento.code === 'Space' || evento.code === 'Enter'){ /* || => ou*/
             tecla.classList.add('ativa');
        }
             } 

    tecla.onkeuup = function() {/*quando solta a tecla do teclado removek*/
        tecla.classList.remove('ativa');
       }
    }




