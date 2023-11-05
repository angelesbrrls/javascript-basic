// Métodos de cadenas de texto (parte 3)
// https://regexr.com

let texto_largo = "Me han dicho un dicho, q' dicen q' he dicho yo. Ese dicho está mal dicho, pues si yo lo hubiera dicho, estaría mejor dicho, q' ese dicho q' dicen q' algún día dije yo."

// Expresión regular
console.log(texto_largo.match(/q'/g))

// Método includes, existe la palabra
console.log(texto_largo.includes("dicho"))

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("M"))

// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("."))


