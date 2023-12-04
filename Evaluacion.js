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
   if (Pregunta6==2310) {
      nota++;
   }
   if (Pregunta7==49560) {
      nota++;
   }
   salida+='<h1>'+nota+'</h1>'
   document.getElementById('nota').innerHTML=salida;
}