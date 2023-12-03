document.addEventListener("DOMContentLoaded", function() {
    var botonLeerMas = document.getElementById("botonLeerMas");
    var contenidoAdicional = document.querySelector(".adicional");
  
    botonLeerMas.addEventListener("click", function() {
      if (contenidoAdicional.style.display === "none") {
        contenidoAdicional.style.display = "block";
        botonLeerMas.textContent = "Leer menos";
      } else {
        contenidoAdicional.style.display = "none";
        botonLeerMas.textContent = "Leer más";
      }
    });
  });
  