//Crear una función autoejecutable, que imprima cuántas horas, minutos y segundos
//faltan para terminar el día
(function() {
  const ahora = new Date();
  const finDelDia = new Date();
  
  // Establecer la hora a las 23:59:59 del día de hoy
  finDelDia.setHours(23, 59, 59, 999);
  
  // Diferencia en milisegundos
  const diferencia = finDelDia - ahora;
  
  // Cálculos de tiempo
  const horas = Math.floor(diferencia / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  console.log(`Faltan ${horas} horas, ${minutos} minutos y ${segundos} segundos para terminar el día.`);
})();

//Crear una función autoejecutable que solicite un número (expresado en segundos) y nos
//devuelvo un saludo, después del tiempo indicado
(function() {
  const segundos = parseFloat(prompt("Ingrese la cantidad de segundos:"));
  
  if (!isNaN(segundos) && segundos >= 0) {
    setTimeout(function() {
      console.log("¡Hola, espero que tengas un excelente día!");
    }, segundos * 1000);
  } else {
    console.log("Por favor, ingrese un número válido de segundos.");
  }
})();
