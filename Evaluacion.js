function calificacion() {
   let nota = 0;

   // Obtener respuestas
   let Pregunta1 = parseInt(document.getElementById('Pregunta1').value);
   let Pregunta2 = parseInt(document.getElementById('Pregunta2').value);
   let Pregunta3 = parseInt(document.getElementById('Pregunta3').value);
   let Pregunta4= (document.getElementById('Pregunta4').value);
   let Pregunta5= (document.getElementById('Pregunta5').value);
   let Pregunta6= (document.getElementById('Pregunta6').value);
   let Pregunta7= (document.getElementById('Pregunta7').value);
   let Pregunta8= (document.getElementById('Pregunta8').value);
   let Pregunta9= (document.getElementById('Pregunta9').value);
   let Pregunta10= (document.getElementById('Pregunta10').value);
   // ... (obtener respuestas de Pregunta4 a Pregunta10)

   // Verificar respuestas y calcular la nota
   if (Pregunta1 === 1752) {
      nota++;
   }
   if (Pregunta2 === 18104) {
      nota++;
   }
   if (Pregunta3===82075) {
      nota++;
   }
   if (Pregunta4===300) {
      nota++;
   }
   if (Pregunta5===3840) {
      nota++;
   }
   if (Pregunta6===2310) {
      nota++;
   }
   if (Pregunta7===49560) {
      nota++;
   }
   if (Pregunta8===659) {
      nota++;
   }
   if (Pregunta9===235) {
      nota++;
   }
   if (Pregunta10===1) {
      nota++;
   }

   // ... (verificar respuestas de Pregunta3 a Pregunta10)

   // Generar salida de respuestas
   let salida = '';
   salida += '<tr><td>' + respuesta(Pregunta1, 1752) + '</td><td>' + respuesta(Pregunta2, 18104) + '</td><td>'+respuesta(Pregunta3, 82075)+
   '</td><td>' + respuesta(Pregunta4, 300) + '</td><td>' + respuesta(Pregunta5, 3840) + '</td><td>'+ respuesta(Pregunta6, 2310) + '</td><td>'
   + respuesta(Pregunta7, 49560) + '</td><td>'+ respuesta(Pregunta8, 659) + '</td><td>' + respuesta(Pregunta9, 235) + '</td><td>'+ respuesta(Pregunta10, 1) + '</td><td>'
   + nota + '</td></tr>'
   
   
   // ... (añadir salida para Pregunta3 a Pregunta10)

   document.getElementById('nota').innerHTML = salida;
}

function respuesta(respuestaUsuario, respuestaCorrecta) {
   if (respuestaUsuario === respuestaCorrecta) {
      return '<p style="color: green;">' + respuestaUsuario + ', la respuesta es correcta</p>';
   } else {
      return '<p style="color: red;">' + respuestaUsuario + ', la respuesta es incorrecta, la respuesta correcta es <span style="color: green;">' + respuestaCorrecta + '</span></p>';
   }
}
