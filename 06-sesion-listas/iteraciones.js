// .some()

const array = [30, 2, 5, 3, 4, 7, 1, 8, -40, -2, 9]
const res = array.some (valor => valor < -0)
console.log(res)

const existe = array.some(valor => valor === -2)
console.log(existe)

const listaObjetos = [
    {nombre: "A", edad: 35},
    {nombre: "B", edad: 25},
    {nombre: "C", edad: 15},
    {nombre: "D", edad: 45},
    {nombre: "E", edad: 55},
]

const existeC = listaObjetos.some (letra => letra.nombre === 'K')
console.log(existeC)

// Cómo obtener una lista apartir de un objeto iterable

const str = "Hola soy Selegna"
console.log(str)
console.log(str[5])
// Método .from()
const ar_str = Array.from(str)
console.log(ar_str)
// Set
const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)
// Keys
console.log(array)
const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)




