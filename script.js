let ncartas = prompt("Com quantas cartas você quer jogar?");
let i = 0;

while (ncartas % 2 !== 0 || ncartas < 4 || ncartas > 14 ){
    ncartas = prompt("Com quantas cartas você quer jogar?");
}


alert ("Joga ai Xomano!");





while(i<ncartas){
function criarCartas(){
    let cartasTemplate = `
    <div class="front-face"
    onclick="selecionar(this)">
        <img src="./imagens/0.png" alt="">  

    </div>
    
    `
    document.querySelector('.frontA').innerHTML += cartasTemplate;
}
criarCartas();
i= i+2;
}

i = 0;
while(i<ncartas){
function criarCartas(){
    let cartasTemplate = `
    <div class="front-face"
    onclick="selecionar(this)">
        <img src="./imagens/0.png" alt="">  
    </div>
    `
    document.querySelector('.frontB').innerHTML += cartasTemplate;
}
criarCartas();
i= i+2;
}




function selecionar (elemento) {
let backcartas = `
    <div class="back-face">
    <img src="./imagens/1.gif" alt="">
    </div>
    `
   elemento.classList.add("virada");
   document.querySelector('.front-face').innerHTML = backcartas;
   
}

