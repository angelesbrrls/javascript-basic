// Cómo trabajar con listas ( arrays, arreglos, vectores ... )

let var1 = 45
let array = [1, "hola", false, {id:5}, null, undefined, var1];
console.log(array)
// Acceder a los valores de un array através de su posición
//array[indice]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

// Métodos para introducir nuevos valores en nuestros arrays
// .push .unshift => Mutan el valor de nuestro array

//Valores al final
array.push("final", 45, 100, false)
console.log(array)
//Valores al principio
array.unshift("inicio", 89, 90)
console.log(array)

// Métodos para eliminar valores en arrays
// .pop(), .shift() => Mutan el valor del array

let array2 = [1, 3, "Hola", false] 

// Valores al final -> Pop
array2.pop()
console.log(array2)
// Valorea al principo -> shift
array2.shift()
console.log(array2)

// Método para eliminar, modificar o añadir valores en array
// .splice ( x, y, z )

const array3 = [1,2,3,4,5,6]
// Eliminar valores splice (indice,num de valores a eliminar)
array3.splice(1, 3) // 3 valores apartir del indice 1
console.log(array3)
// Añadir valores .splice(indice, 0, valores)
array3.splice(2,0,'hola', 8)
console.log(array3)
// Modificar valores .splice (indice, 1, valores)
array3.splice(2, 1, "actualizado")
console.log(array3)