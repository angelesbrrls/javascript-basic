
const moduloMath = require("./modulos/operaciones-math.js")

console.log(moduloMath)
//const factorial = moduloMath.factorial // opcion 1. es otra forma
//const { factorial, sumatoria } = moduloMath  // opción 2. es otra forma
const fact = moduloMath.factorial(5) // factorial(5)
console.log(fact)

const sum = moduloMath.sumatoria(10,11) // sumatoria(10,11)
console.log(sum)


/*
Formas de importar/exportar
1. CommonJS - require
2. Import ES6 - import
por default se importa module - probar -> 
*/

//console.log(module)