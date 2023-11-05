// Ordenamiento
// sort() -> Método que modifica el array

const array = [2,5, 9, 15, 1, 2, 0, 4]
console.log(array)
array.sort((a,b) => {
    if ( a < b) {
        return -1
    } else if ( a > b) {
        return +1
    } else { // a === b
        return 0
    }
})
console.log(array)

// Ordenar únicamente arrays numéricos

const arrayNum = [4,3,4,5,10,6,7,9]
// Optimización
arrayNum.sort((a,b) => a - b )
console.log(arrayNum)

// Array de objetos

const listaObjetos = [
    {nombre: "A", edad: 35},
    {nombre: "B", edad: 25},
    {nombre: "C", edad: 15},
    {nombre: "D", edad: 45},
    {nombre: "E", edad: 55},
]

listaObjetos.sort((a,b) => {
    if(a.edad < b.edad){
        return -1
    } else if ( a.edad > b.edad){
        return +1
    } else {
        return 0
    }
})
console.log(listaObjetos)
// Optimización
const listaObjetos2 = [
    {nombre: "A", edad: 35},
    {nombre: "B", edad: 25},
    {nombre: "C", edad: 15},
    {nombre: "D", edad: 45},
    {nombre: "E", edad: 55},
]
listaObjetos2.sort((a,b) => a.edad - b.edad )
console.log(listaObjetos2)