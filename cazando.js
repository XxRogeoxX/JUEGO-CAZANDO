let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;

let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 50;
const ANCHO_GATO = 80;

const ALTO_COMIDA = 25;
const ANCHO_COMIDA = 25;

const ANCHO = canvas.width / 2 - ANCHO_GATO / 2;
const ALTO = canvas.height / 2 - ALTO_GATO / 2;


function graficarGato(){
    ctx.fillStyle ="#db8707";
    ctx.fillRect(ANCHO,ALTO,ANCHO_GATO,ALTO_GATO);
}
function graficarComida(){
    ctx.fillStyle ="#27b83f";
    ctx.fillRect(canvas.width - ANCHO_COMIDA,canvas.height - ALTO_COMIDA,ANCHO_COMIDA,ALTO_COMIDA);
}
function iniciarJuego(){
    graficarGato();
    graficarComida();
}