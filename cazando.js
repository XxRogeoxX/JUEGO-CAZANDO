let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function dibujarRectangulo(){
    let anchoGato=100;
    let altoGato=100;
    ctx.fillStyle ="#27B8AB";
    ctx.fillRect(canvas.width/4,canvas.height/4,canvas.width*2/4,canvas.height*2/4);
}
