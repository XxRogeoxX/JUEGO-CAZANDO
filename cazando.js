let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX = canvas.width / 2 - 80 / 2;
let gatoY = canvas.height / 2 - 50 / 2;

let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 50;
const ANCHO_GATO = 80;

const ALTO_COMIDA = 25;
const ANCHO_COMIDA = 25;


function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color
    ctx.fillRect(x,y,ancho,alto)
}
function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"blue");
}
function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"green");
}
function iniciarJuego(){
    graficarGato();
    graficarComida();
}
function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function detectarColision() {
    if (
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ) {
        alert("ÑAM ÑAM DELICIOUS");
    }
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    limpiarCanva();     
    graficarGato();   
    graficarComida(); 
    detectarColision();  
}
function moverDerecha() {
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
    gatoY = gatoY + 10; 
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}