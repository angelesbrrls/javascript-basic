// Funciones, declaración y utilización

const nom = "Selegna"
saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}


// Valores primitivos

let nombre_2 = "Mar"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Mar2"
    console.log(`Adiós ${nombre}`)
}

// Valores por objetos - Atención: Referencia

let persona = { nombre: "Selegna", apellido: "B" }
console.log(persona)

saludarPersona(persona)

console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = "P"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

// Parámetros por defecto

function imprimeNumero(numero = 4) { 
    console.log(numero)
}

imprimeNumero()

// Parámetros por propagación

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

// Suma de elementos por propagación

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 20)

console.log(s)

// Ámbito o alcance de variables

let variable = "hola"
function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adiós"
    console.log(variable_interna)
    return a * b
}
console.log(multiplicar(4, 9))