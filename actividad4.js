///Función 3:
//Crear una función que solicite dos arreglos numéricos, deberá
//retornar la suma de ambos arreglos siempre que tengan el mismo número
//de elementos, de lo contrario, devolver array vacio []


function sumarArreglos(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return [];
    }

    let resultado = [];

    for (let i = 0; i < arr1.length; i++) {
        resultado.push(arr1[i] + arr2[i]);
    }

    return resultado;
}

// Test
console.log("Función 3:");
console.log("Primer arreglo:", [1, 2, 3]);
console.log("Segundo arreglo:", [4, 5, 6]);
console.log("Resultado de la suma:", sumarArreglos([1, 2, 3], [4, 5, 6]));

console.log("Primer arreglo:", [1, 2]);
console.log("Segundo arreglo:", [4, 5, 6]);
console.log("Resultado de la suma:", sumarArreglos([1, 2], [4, 5, 6]));



//Función 4
//Crear una función que solicite un número positivo y retorne todos los divisores
//desde 1 hasta el número que hayas indicado. El resultado se obtiene
//como arreglo. Ejemplo: 22 ->, ejemplo 40 -> [1,2,4,5,8,10,20,40]
function obtenerDivisores(numero) {
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}

// Test
console.log("Función 4:");
console.log("Ejemplo: 22:");
console.log(obtenerDivisores(22));
console.log("Ejemplo: 40:");
console.log(obtenerDivisores(40));

