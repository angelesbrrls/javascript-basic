// Trabajando con objetos

// Definiendo
const obj = {
    id: 4,
    nombre: "Selegna",
    apellido: "Br",
    isDeveloper: true,
    libros_favoritos: [ "El métodos", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]  //Debe estar entre comillas por los números y guiones
}

console.log(obj.id)
console.log(obj["4-juegos"])

// Propiedades através de variables
const prop = "isDeveloper"
console.log(obj[prop])

// Referencia en objetos
const obj2 = obj
console.log(obj2)

obj2.nombre = "test"
console.log(obj2.nombre)
console.log(obj.nombre)

// Valores primitivos
let val1 = 4
let val2 = val1
val2 = 6
console.log(val1)
console.log(val2)

const obj3 = { ...obj }
obj3.nombre = "nuevoNombre"
console.log(obj.nombre)
console.log(obj3.nombre)

// Cómo ordenas lista de objetos en función de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "Efecto mariposa", anyo: 2004}
]
console.log(listaPeliculas)
// .sort() -> Muta el valor de la lista original
listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas)
