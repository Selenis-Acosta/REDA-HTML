var salida='';
function calificacion() {
   let nota= 0;
   let Pregunta1= parseInt(document.getElementById('Pregunta1').value);
   let Pregunta2= parseInt(document.getElementById('Pregunta2').value);
   let Pregunta3= parseInt(document.getElementById('Pregunta3').value);
   let Pregunta4= (document.getElementById('Pregunta4').value);
   let Pregunta5= (document.getElementById('Pregunta5').value);
   let Pregunta6= (document.getElementById('Pregunta6').value);
   let Pregunta7= (document.getElementById('Pregunta7').value);
   let Pregunta8= (document.getElementById('Pregunta8').value);
   let Pregunta9= (document.getElementById('Pregunta9').value);
   let Pregunta10= (document.getElementById('Pregunta10').value);
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
}
function respuesta(Pregunta1) {
   if (Pregunta1==1752) {
      text= '<p style="color: green;">'+1752+', la respuesta es correcta</p>';
  }
  else {
      text= '<p style="color: red;">'+Pregunta1+', la respuesta es incorrecta, la respuesta correcta es','<spam style="color: green;>'+1752+'</spam>','</p>';
  }
  return text;
}
function Pregunta2(Pregunta2) {
   if (Pregunta2==18104) {
      text= '<p style="color: green;">'+18104+', la respuesta es correcta</p>';
  }
  else {
      text= '<p style="color: red;">'+Pregunta2+', la respuesta es incorrecta, la respuesta correcta es','<spam style="color: green;>'+18104+'</spam>','</p>';
  }
  return text;
}
salida+='<tr><td>'+respuesta(Pregunta1)+'</td><td>'+Pregunta2(Pregunta2)+'</td>'
document.getElementById('nota').innerHTML=salida;