const persona = {
    nombre: "Selegna",
    edad: 35
}

console.log(persona)

function obtenCalcEdad(edad) {
    return 2 * edad
}

const multiplicaEdad = obtenCalcEdad(persona.edad)

console.log(multiplicaEdad)

function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)