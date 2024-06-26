//alert("TESTE")

var botaoR
var botaoA
var imagens
var img1
var img2
//o numero é a imagem que eu seleciono
var indice  = 1   
var indice2 = 0
var indice3 = 2
var temporizador

const tempo = 4000

botaoR  = document.getElementById("botaoRetorna")
botaoA  = document.getElementById("botaoAvanca")
imagens = document.getElementById("image")
img1    = document.getElementById("imagem1")
img2    = document.getElementById("imagem2")

var imagem = ["brisa.JPG", "brisa2.JPG ", "la.JPG", "la2.JPG", "casacos2.JPG", "fabula.JPG"]

window.onload = inicio

function inicio() {

    botaoA.onclick = avancarimagem
    botaoR.onclick = retornaimagem
    mostrarimagem()
}

function avancarimagem() {

    if (indice2 < imagem.length - 1 && indice < imagem.length - 1 && indice3 < imagem.length - 1) {

        indice2 ++ 
        indice  ++
        indice3 ++

    } else {

        indice2 = 0;
        indice  = 0;
        indice3 = 0;    
    }
    
    mostrarimagem();
    clearInterval(temporizador); //pausa o carrocel
    automaticoimagem(); 
}

function retornaimagem() {

    if (indice2 > 0 && indice > 0 && indice3 > 0) {

        indice2 --;
        indice  --;
        indice3 --;
        
    } else {

        indice2 = imagem.length - 1;
        indice  = imagem.length - 1;
        indice3 = imagem.length - 1;
    }

    mostrarimagem();
    clearInterval(temporizador); 
    automaticoimagem(); 
}

function automaticoimagem() {

    temporizador = setInterval(avancarimagem, tempo);
    mostrarimagem();
}

function mostrarimagem() {

    img1.src    = "img/carrocel/" + imagem[indice2]
    imagens.src = "img/carrocel/" + imagem[indice]
    img2.src    = "img/carrocel/" + imagem[indice3]
}