// Iterar los valores de una lista

const array = ["hola", 2, 5, 90, false, undefined]
// for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// ES6 más eficiente
let suma = 0 
const arrayNums = [3,6,2,77,2,,3,93,19]
arrayNums.forEach(valor => {
    suma += valor
    console.log(valor)
});
console.log(suma)


// búsqueda de un valor dentro de una lista
// Encontrar 90

const variable = array.find(valor => {
    if (valor === 90 ){
        return true
    }
})
console.log(variable)

const listaObjetos = [
    {nombre: "A", edad: 35},
    {nombre: "B", edad: 25},
    {nombre: "C", edad: 15},
    {nombre: "D", edad: 45},
    {nombre: "E", edad: 55},
]

const objeto = listaObjetos.find(o => {
    if (o.nombre === 'C' ){
        return true
    }
})
console.log(objeto.edad)
// Optimizar
const objeto1 = listaObjetos.find(o => o.nombre === 'C')
console.log(objeto1.edad)
// Otra forma
const { edad } = listaObjetos.find(o => o.nombre === 'A')
console.log(edad)


