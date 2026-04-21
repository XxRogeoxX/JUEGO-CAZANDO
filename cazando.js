let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// --- 1. CARGA DE IMÁGENES ---
const imagenGato = new Image();
imagenGato.src = 'IMAGEN_GATO.jpg'; 

const imagenComida = new Image();
imagenComida.src = 'COMIDA_GATO.png'; 

// --- 2. CONFIGURACIÓN Y VARIABLES ---
let gatoX = canvas.width / 2 - 80 / 2;
let gatoY = canvas.height / 2 - 50 / 2;

let comidaX = 0;
let comidaY = 0;

let puntos = 0;
let tiempo = 15;
let cronometro;

const ALTO_GATO = 50;
const ANCHO_GATO = 80;

const ALTO_COMIDA = 40; // Ajustado un poco el tamaño para que se vea mejor
const ANCHO_COMIDA = 40;

// --- 3. FUNCIONES DE DIBUJO ---
function graficarGato() {
    ctx.drawImage(imagenGato, gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

function graficarComida() {
    ctx.drawImage(imagenComida, comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// --- 4. LÓGICA DEL JUEGO ---
function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);

    if (tiempo <= 0) {
        detenerJuego();
        alert("GAME OVER - Se acabó el tiempo");
        location.reload();
    }
}

function iniciarJuego() {
    // Posición inicial de la comida
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
    
    // Dibujar elementos iniciales
    graficarGato();
    graficarComida();
    
    // Iniciar contador
    cronometro = setInterval(restarTiempo, 1000);
}

function detenerJuego() {
    clearInterval(cronometro);
}

function detectarColision() {
    if (
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ) {
        // Ganar punto
        puntos = puntos + 1;
        mostrarEnSpan("puntos", puntos);

        // Reiniciar tiempo al atrapar comida
        tiempo = 15;
        mostrarEnSpan("tiempo", tiempo);
        
        if (puntos >= 6) {
            detenerJuego();
            alert("¡CONGRATULATIONS! Has alimentado al gato.");
            location.reload();
        } else {
            // Mover la comida a un lugar nuevo
            comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
            comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
            actualizarEscena();
        }
    }
}

// --- 5. MOVIMIENTO Y ACTUALIZACIÓN ---
function actualizarEscena() {
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverIzquierda() {
    gatoX = gatoX - 15;
    actualizarEscena();
    detectarColision();  
}

function moverDerecha() {
    gatoX = gatoX + 15;
    actualizarEscena();
    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 15;
    actualizarEscena();
    detectarColision();
}

function moverAbajo() {
    gatoY = gatoY + 15; 
    actualizarEscena();
    detectarColision();
}

function reiniciarJuego() {
    detenerJuego();
    location.reload();
}