let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX = canvas.width / 2 - 80 / 2;
let gatoY = canvas.height / 2 - 50 / 2;

let comidaX = 0;
let comidaY = 0;

let puntos = 0;

let tiempo = 15;

let cronometro;

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
function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);

    if (tiempo <= 0) {
        detenerJuego();
        alert("GAME OVER");
        location.reload();
    }

        
}

function iniciarJuego() {
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
    cronometro = setInterval(restarTiempo, 1000);
}
function detenerJuego() {
    clearInterval(cronometro);
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
        // 1. Ganar 1 punto
        puntos = puntos + 1;
        mostrarEnSpan("puntos", puntos);

        // 2. reiniciar el tiempo a 15 segundos
        tiempo = 15;
        mostrarEnSpan("tiempo", tiempo);
       
        tiempo = tiempo - 1;
        mostrarEnSpan("tiempo", tiempo);
        
        if (puntos >= 6) {
            detenerJuego();
            alert("¡CONGRATULATION");
            location.reload();
        } else {
            comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
            comidaY = generarAleatorio(0, canvas.height - ANCHO_COMIDA);
            limpiarCanva();
            graficarGato();
            graficarComida();
        }
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

function reiniciarJuego() {
    detenerJuego();
    location.reload();
}

function atrapado(){
    tiempo = 15;
    detectarColision();
    return  mostrarEnSpan("tiempo", tiempo);
}