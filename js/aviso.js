var imagenes = ["./images/aviso1.png", "./images/aviso2.png", "./images/aviso3.png", "./images/aviso4.png"]; // arreglo con las dos imágenes
var indice = 0; // variable para guardar el índice de la imagen actual

setInterval(function() {
indice = (indice + 1) % imagenes.length; // incrementar el índice y volver a cero si se llega al final del arreglo
document.getElementById("aviso-img").src = imagenes[indice]; // cambiar la imagen del elemento con id "aviso-img"
}, 5000); // cambiar la imagen cada 3 segundos (3000 milisegundos)
