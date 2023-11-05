// Métodos de cadenas de texto (parte 2)
let input = "Capricornio"
let db = "capricornio"
console.log(input === db)

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(db.toLowerCase())
console.log(db.toLocaleLowerCase()) // casos específicos por diferentes idiomas
console.log(input.toLowerCase() === db.toLowerCase())


// Formas de concaternar dos cadenas de caracteres
let str_1 = "Hola cadena 1, ";
let str_2 = "cadena 2.";
console.log(str_1.concat(str_2, " ...  finalmente, cadena n. "))
console.log(str_1 + str_2 + " ...  finalmente, cadena n. ")
console.log(`${str_1}  ${str_2} ` + " ...  finalmente, cadena n. ")

// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un str con espacios al final.   "
console.log(str_3.length)
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtner el caracter que hay en cierta posición
let str_4 = "Hola string número 4"  // ["H", "o", "l" ...]
console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Selegna y me gusta leer. Mi nombre Selegna"
console.log(str_5.indexOf('Selegna')) // Posición del primer caracter, sino lo encuentra regresa -1
console.log(str_5.lastIndexOf('Selegna')) // Posición del primer caracter, sino lo encuentra regresa -1
