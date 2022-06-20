
let ncartas = prompt("Com quantas cartas você quer jogar?");
let i = 0;
let j = 1;

while (ncartas % 2 !== 0 || ncartas < 4 || ncartas > 14 ){
    ncartas = prompt("Com quantas cartas você quer jogar?");
}
alert ("Joga ai Xomano!");

const index = 2*ncartas;

while(i<index){
function criarCartas(){
    let cartasTemplate = `
    <div class="carta">
        <img class="front-face" img src="./imagens/0.png" alt="Face da Carta">
        <img class="back-face" img src="./imagens/${j}.gif" alt="Verso da Carta">
    </div>
 `
    if (j<7){
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
let primeiraCarta = 0;
let segundaCarta = 0;

function flipCard() {
    this.classList.toggle('flip');
    this.classList.add('flip');

    if (!virarCarta){
        virarCarta = true;
        primeiraCarta = this;

    }
  }
  

  vira.forEach(card => card.addEventListener('click', flipCard));
