
let ncartas = prompt("Com quantas cartas você quer jogar?");
let i = 0;
let j = 1;

while (ncartas % 2 !== 0 || ncartas < 4 || ncartas > 14 ){
    ncartas = prompt("Com quantas cartas você quer jogar?");
}
alert ("Joga ai Xomano!");

const index = 2*ncartas;
const k = ncartas/2;

while(i<index){
function criarCartas(){
    let cartasTemplate = `
    <div class="carta" data-framework="${j}">
        <img class="front-face" img src="./imagens/0.png" alt="Face da Carta">
        <img class="back-face" img src="./imagens/${j}.gif" alt="Verso da Carta">
    </div>
 `
    if (j<k){
        j++;    
    }else {
        j=1;
    }
    i = i+2;
    document.querySelector('.container').innerHTML += cartasTemplate;
}
criarCartas();
}

i = 0;

const vira = document.querySelectorAll('.carta');


let virarCarta = false;
let bloqueio = false;
let primeiraCarta = 0;
let segundaCarta = 0;

// adiciona a função flip pra que as cartas rotacionem

function flipCard() {
    if (bloqueio) return;   // bloqueia que o usuario vire uma terceira carta
    
    this.classList.add('flip');

    if (!virarCarta){
        virarCarta = true;
        primeiraCarta = this;
        
        return;
    }

    segundaCarta = this;
    virarCarta = false;
 
    verificarIgualdade();

  }


  // verifica se a primeira carta é igual a segunda comparando o nome do arquivo

  function verificarIgualdade(){
    if (primeiraCarta.dataset.framework === segundaCarta.dataset.framework){
        desabilitaVirada();
        return;
    }

    desviraCarta();
  }

  // se a primeira carta é igual a segunda desabilita a função click e ela perde os efeitos css

  function desabilitaVirada(){
      primeiraCarta.removeEventlistener('click', flipCard);
      
      segundaCarta.removeEventlistener('click', flipCard);
      
  }

// se a primeira carta é igual a segunda desabilita a função flip e ela fica estatica

  function desviraCarta(){  
      bloqueio = true;  // desbloqueia que o usuario vire uma terceira carta
      setTimeout (() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');     
 // bloqueia que o usuario vire uma terceira carta até que passe pela etapa de verificação
        bloqueio = false;
        }, 1000);

        
    }


// embaralha as cartas
    (function embaralhar(){
        vira.forEach(card=>{
            let aleatorio = Math.floor(Math.random()*ncartas);
            card.style.order = aleatorio;
        });
    })();

   
    vira.forEach(card => card.addEventListener('click', flipCard));
    


 
