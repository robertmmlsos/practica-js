//Función 1:
//crear una función que reciba un arreglo de números y retorne como resultado
//un objeto indicándonos cuántos valores son pares e impares
function contarParesImpares(numeros) {
  let pares = 0;
  let impares = 0;

  numeros.forEach(num => {
    if (num % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  });

  return {
    pares: pares,
    impares: impares
  };
}

//Test, demostración, console.log
const listaNumeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Resultado Función 1:", contarParesImpares(listaNumeros));



//Función 2:
//escribir una función que retorne true|false dependiendo si el valor de entrada
//corresponde a un número capicúa. 121, 444, 3223. Solo permite analizar valores
//de hasta 5 dígitos (99999)
function esCapicua(numero) {
  if (numero > 99999 || numero < 0) {
    return false;
  }

  const textoOriginal = numero.toString();
  const textoInvertido = textoOriginal.split('').reverse().join('');

  return textoOriginal === textoInvertido;
}

//Test, demostración, console.log
console.log("¿121 es capicúa?:", esCapicua(121));     
console.log("¿444 es capicúa?:", esCapicua(444));     
console.log("¿3223 es capicúa?:", esCapicua(3223));   
console.log("¿12345 es capicúa?:", esCapicua(12345)); 
console.log("¿100001 (más de 5 dígitos)?:", esCapicua(100001)); 
