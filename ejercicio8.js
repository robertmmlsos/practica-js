const alimentos = [
    ["manzana", "pera", "mango", "sandía", "melón"],
    ["lechuga", "coliflor", "espárrago"],
    ["pescado", "cerdo"],
    ["arroz"],
    ["arroz", "cereal", "avena", "maiz", "trigo", "centeno", "cebada"] //7

]

// ¿Cuántos elementos tiene la matriz?
console.log("total elementos matirz", alimentos.length);


// ¿Cuál es el array de la matriz que tiene más datos?
let mayor = 0
alimentos.forEach(categoriaAlimentos => {
    if (categoriaAlimentos.length > mayor){
        mayor = categoriaAlimentos.length
    }
})
console.log("Array más grande contiene:", mayor)


// ¿Cuál es el array de la matriz que tiene menos datos?
let menor = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
    if (categoriaAlimentos.length < menor){
        menor = categoriaAlimentos.length
    }
})
console.log("Array más grande contiene:", menor)


// ¿Cuántos elementos en total tiene la matriz? considerando todos los arreglos
let sumatoria = 0
alimentos.forEach(categoriaAlimentos =>{
    sumatoria += categoriaAlimentos.length
})
console.log("En total tenemos:", sumatoria, "alimentos")
