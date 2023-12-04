var salida="";
function calificacion() {
    let nota = 0;
    let Pregunta1 = parseInt(document.getElementById('Pregunta1').value);
    let Pregunta2 = parseInt(document.getElementById('Pregunta2').value);
    let Pregunta3 = parseInt(document.getElementById('Pregunta3').value);
    let Pregunta4 = parseInt(document.getElementById('Pregunta4').value);
    let Pregunta5 = parseInt(document.getElementById('Pregunta5').value);
    let Pregunta6 = parseInt(document.getElementById('Pregunta6').value);
    let Pregunta7 = parseInt(document.getElementById('Pregunta7').value);
    let Pregunta8 = parseInt(document.getElementById('Pregunta8').value);
    let Pregunta9 = parseInt(document.getElementById('Pregunta9').value);
    let Pregunta10 = parseInt(document.getElementById('Pregunta10').value);
    if (Pregunta1==1752) {
        nota++;
     }
     if (Pregunta2==18104) {
        nota++;
     }
     if (Pregunta3==82075) {
        nota++;
     }
     if (Pregunta4==300) {
        nota++;
     }
     if (Pregunta5==3840) {
        nota++;
     }
     if (Pregunta6==2310) {
        nota++;
     }
     if (Pregunta7==49560) {
        nota++;
     }
     if (Pregunta8==659) {
        nota++;
     }
     if (Pregunta9==235) {
        nota++;
     }
     if (Pregunta10==1) {
        nota++;
     }
    // Aquí se calcula la calificación pero falta mostrar los resultados en la página
    mostrarResultados(nota, Pregunta1, Pregunta2, Pregunta3, Pregunta4, Pregunta5, Pregunta6, Pregunta7, Pregunta8, Pregunta9, Pregunta10);
 }
 
 function mostrarResultados(nota, Pregunta1, Pregunta2, Pregunta3, Pregunta4, Pregunta5, Pregunta6, Pregunta7, Pregunta8, Pregunta9, Pregunta10) {
    var salida = '<table>';
    salida += '<tr><td>' + respuesta(respuestaPregunta1, 1752) + '</td><td>' + respuesta(respuestaPregunta2, 18104) + '</td></tr>';
    // Aquí se agregan el resto de las preguntas a la tabla
 
    salida += '</table>';
    document.getElementById('nota').innerHTML = salida;
 }
 
 function respuesta(respuestaUsuario, respuestaCorrecta) {
    if (respuestaUsuario === respuestaCorrecta) {
       return '<p style="color: green;">' + respuestaCorrecta + ', la respuesta es correcta</p>';
    } else {
       return '<p style="color: red;">' + respuestaUsuario + ', la respuesta es incorrecta, la respuesta correcta es <span style="color: green;">' + respuestaCorrecta + '</span></p>';
    }
 }
 