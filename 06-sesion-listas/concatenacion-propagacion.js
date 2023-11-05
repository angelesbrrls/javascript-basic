// Cómo unir dos listas concat(lista2) -> no muta la listas

const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2))
console.log(lista1)

const lista3 = lista1.concat(lista2)
console.log(lista3)

// Cómo unir dos listas con el factor de propagación
//por separado, no es un array
console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4)

// ERROR!!! Mal entendido el concept del factor de propagación

const lista5 = [lista1, lista2]
console.log(lista5)