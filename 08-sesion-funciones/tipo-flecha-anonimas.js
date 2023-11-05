// Funciones tipo Flecha - funciones anónimas

const array = [ 1, 5, 6, 2, 12, 8, 92]
// sin flecha
const array2_sin = array.map(function(valor){
    return valor * 2
})
console.log(array2_sin)
// con tipo flecha
const array2_con = array.map((valor) => valor * 2)
console.log(array2_con)

// función anónima - función que no está siendo asignada a ningún nombre
const dobleValor = valor => valor * 2
console.log(dobleValor(7))  // Se puede acceder a las funciones después de ser inicializadas

const array3 = array.map(dobleValor);
console.log(array3)
