// Set o conjuntos
// Elementos únicos - no ordenados , el Set nos asegura valores no repetidos

const array = [1, 2, 3, 4, 5, 2, 5, "hola", { id: 5}, {id: 5}, "hola"]
const miSet = new Set(array)

console.log(array)
console.log(miSet) 
//console.log({id: 5} === {id: 5}) // Referencias diferentes, no son el mismo objeto

// Método .add()

miSet.add(9)
miSet.add(2)
console.log(miSet)


// Método .delete()

miSet.delete("hola")
console.log(miSet)


// Método .has() // contiene similar al includes
//console.log(array.includes(2))

console.log(miSet.has(5))
console.log(miSet.has(200))

// Propiedad .size

console.log(miSet.size)


// Iteración dentro de los valores - forEach

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

// factor de propagación
const ar_miSet = [... miSet]
console.log(ar_miSet)
console.log(ar_miSet[3])

// Método .clear()

miSet.clear()
console.log(miSet)

