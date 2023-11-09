document.getElementById("mostrarOcultar").addEventListener("click", function() {
    var textoOculto = document.getElementById("textoOculto");
    if (textoOculto.style.display === "none") {
        textoOculto.style.display = "block"; // Mostrar el texto
    } else {
        textoOculto.style.display = "none"; // Ocultar el texto
    }
});
