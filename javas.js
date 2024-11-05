const boton = document.getElementById("siete");  // Obtener el botón con id "siete"
boton.addEventListener("click", function() {
    const celda = document.getElementById("celda");  // Obtener la celda con id "celda"
    celda.innerHTML = 'Hola';  // Cambiar el contenido de esa celda a "Hola"
});
