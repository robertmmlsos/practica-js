//Crear un objeto que contenga información computador
//cadenas, enteros, decimales, lógicos, arreglos, nuevos objetos
const computadora = {
  marca: "Asus", 
  almacenamientoGB: 1024, 
  procesadorVelocidadGHZ: 4.7, 
  esGamer: true, 
  puertosDisponibles: ["USB 3.2", "USB-C", "HDMI 2.1"], 
  componentes: [ 
    { nombre: "Tarjeta de video", modelo: "RTX 4070" },
    { nombre: "Memoria RAM", capacidadGB: 32 },
    { nombre: "Sistema de enfriamiento", tipo: "Líquido" }
  ]
}

console.log(computadora);

