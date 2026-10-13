//Crear un objeto que contenga información computador
//cadenas, enteros, decimales, lógicos, arreglos, nuevos objetos
const computadora = {
  marca: "Asus", // Cadena (string): Texto entre comillas para representar palabras.
  almacenamientoGB: 1024, // Entero (integer): Número entero sin decimales para contar o medir capacidades.
  procesadorVelocidadGHZ: 4.7, // Decimal (float): Número con punto decimal para representar medidas precisas.
  esGamer: true, // Lógico (boolean): Valor de verdadero (true) o falso (false) para validar condiciones.
  puertosDisponibles: ["USB 3.2", "USB-C", "HDMI 2.1"], // Arreglos (arrays): Listas de datos agrupados dentro de corchetes.
  componentes: [ // Nuevos objetos (objects): Estructuras de datos clave-valor dentro de llaves, metidas en un arreglo.
    { nombre: "Tarjeta de video", modelo: "RTX 4070" },
    { nombre: "Memoria RAM", capacidadGB: 32 },
    { nombre: "Sistema de enfriamiento", tipo: "Líquido" }
  ]
}
