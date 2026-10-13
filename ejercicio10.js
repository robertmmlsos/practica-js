//Objetos = JSON (Javascript Object Notation)
//Estructura que guarda datos utilizando {Key: value}
let perfil = {
  apellidos: "Isidro Mancha",
  nombres:"Robert ",
  edad: 19,
  telefonos: ["926448515", "945652123", "956235456"],
  formacion: [
  { nivel: "Primaria", nombre: "miguel grau", anio: 2015 },
  { nivel: "Secundaria", nombre: "pitagoras", anio: 2020 },
  { nivel: "Superior", nombre: "SENATI", anio: 2027 }
],
  habilidades: [
  { skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"] },
  { skill: "Lenguajes programación", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"] },
  { skill: "Sistemas operativos", herramientas: ["Windows", "Linux", "Android"] }
]
}
//Habilidades en programación
console.log(perfil.habilidades[1].herramientas)

//¿Cuál es el nombre del centro de formación secundaria?
console.log(perfil.formacion[1].nombre)

//¿Cuántos teléfonos tiene la persona?
console.log(perfil.telefonos.length)

//Mostrar cada uno de los motores de Base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
 console.log(element);
})

