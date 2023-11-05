
const miFuncion = val => {
    if (typeof val === "number") {
        return 5 * val
    }
    throw new Error("El valor debe ser de tipo número")
}

//const elError = miFuncion("4a")

const numero = "3";

try {
    console.log("Función correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar siempre al final")
}