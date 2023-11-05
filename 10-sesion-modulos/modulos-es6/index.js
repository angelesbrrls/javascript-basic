import * as modMath from './modulos/operaciones.js'
import getAuthor, { libro } from './modulos/literatura.js' // Importar por defecto y por nomenclatura
//import { sumatoria, factorial, nombre } from './modulos/operaciones.js' // Opción

const sum = modMath.sumatoria(10,11) 
console.log(sum)

const fact = modMath.factorial(5)
console.log(fact)

console.log(modMath.nombre)

console.log(getAuthor())
console.log(libro)