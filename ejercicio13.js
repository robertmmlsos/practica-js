//formas de crear una funcion 
//f1: por declaracion
function hacerAlgo() {
  return "resultado";
}
const saludo = function saludar() {
  return "Hola que tal";
};
console.log(saludo());
const suma = function sumar(num1, num2) {
  return num1 + num2;
};
console.log(suma(17, 20));

//Tipos de funciones: anonima (funciones por expresion)
const mensaje = function (){
  return "Ingneria de Software"
};

console.log(mensaje) // Tipo de dato => function
console.log(mensaje());// Ejecuta la funcion

//Para aplicar este tipo de funciones, se requiere ; antes del llamado
//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo).No olvidar :
(/*
(declaracion de la funcion)(ejecucion de la funcion); 
 */
  function(){
   console.log("hola que tal");
})();

(
  function (nombre = ''){
    console.log('Bienvenido:',nombre)
  }
)('Katherine');

//crea una funcion autoejecutable que calcule al promedio de 3 notas
//Estas funciones suelen EJECUTAR TAREAS sin retornar datos
(
  function(nota1, nota2, nota3){
    console.log((nota1 + nota2 + nota3) / 3)
  }
)(14, 12, 20);