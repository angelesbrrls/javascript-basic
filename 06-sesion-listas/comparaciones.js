// Cómo podemos comparar listas
// .every()

const array = [4, 6, 5, 2, 7, 8, 76, 34, 3, -40]

const resultado = array.every (valor => {
    if (typeof valor === "number"){
        return true
    } else {
        return false
    }
})
console.log(resultado)

const resultado2 = array.every (valor => {
    if (valor > 0){
        return true
    } else {
        return false
    }
})
console.log(resultado2)
// Optimizado
const resultado3 = array.every(valor => valor > 0)
console.log(resultado3)

// Comparación de lista
const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]
console.log(ar1 === ar2)
// Funcion
const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length ) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}
console.log(compararArrays(ar1, ar2));
const ar3 = [2,1,5,6]
console.log(compararArrays(ar1, ar3))