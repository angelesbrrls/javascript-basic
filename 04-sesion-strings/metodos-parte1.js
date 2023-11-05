//Métodos más utilizados con cadenas de caracteres (parte 1)

// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)


// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(5,10) //posición inicial, posición final
console.log(slice_str)

let substring_str = str.substring(5,10)  //posición inicial, posición final
console.log(substring_str)

let substr_str = str.substr(5,10)  //posición inicial, longitud
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Ange"
console.log(cadena)
// Al utilizar string sólo reemplaza la primera instacia
console.log(cadena.replace('Ange', 'Star'))

let texto_largo = "Me han dicho un dicho, q' dicen q' he dicho yo. Ese dicho está mal dicho, pues si yo lo hubiera dicho, estaría mejor dicho, q' ese dicho q' dicen q' algún día dije yo."
console.log(texto_largo.replace("q'", 'que'))

// Al utilizar la expresión regular /g (global), reemplaza todas las instacias
console.log(texto_largo.replace(/q'/g, 'que'))

