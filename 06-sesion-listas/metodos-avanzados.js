// Trabajar con métodos avanzados
// .map() .filter(), .reduce()

const array = ["CDMX", "MTY", "GDL", "GRO"];

const val = array.forEach((v) => {
    console.log(v);
    return 4
});
console.log(val)

// Map - callback acepta dos parametros valor e indice
const newArray = array.map((valor, indice )=> {
    return ` ${indice + 1} - ${valor}`
})
console.log(newArray)
//Optimizar
const newArray2 = array.map((valor, indice )=> ` ${indice + 1} - ${valor}`)
console.log(newArray2)


// Filter
const listaObjetos = [
    {nombre: "A", edad: 35},
    {nombre: "B", edad: 25},
    {nombre: "C", edad: 15},
    {nombre: "D", edad: 45},
    {nombre: "E", edad: 55},
]

const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30){
        return true
    } else {
        return false
    }
})
console.log(personasMayores)
// Optimizar
const personasMayores2 = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores2)

// Descartar por filter
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "C")
console.log(nuevaLista)

// Reduce
// Obtener algo de una lista - acumulado

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i , arrayOriginal) => { 
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})
console.log(suma)