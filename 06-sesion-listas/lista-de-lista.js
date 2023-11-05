// Cómo obtener una lista apartir de otra .slice()

const array = ["hola", 1, 2, 3, true, null, "adios"]

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
// indice inicial y indice final
console.log(array.slice(1,4))
const array2 = array.slice(2,5)
console.log(array2)
// a la inversa del final al inicial
const array3 = array.slice ( 2, -2)
console.log(array3)
