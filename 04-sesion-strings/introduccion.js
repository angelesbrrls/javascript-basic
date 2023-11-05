//String (cadena de caracteres)

let str_sng = 'Hola, soy un text con comillas simples';
let str_dbl = "Hola, soy un texto con comillas dobles";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"';
let str_comillas_simples_2 = 'El otro día me dijo literalmente \'ve a sacar la basura\'';
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'";

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_simples_2);
console.log(str_comillas_dobles);


// Comillas invertidas (backticks) permite introducir variables

let str_backticks = `Hola esto es un string con backticks`
console.log(str_backticks)

let nombre = "Ange"
let saludo = `Hola, ${nombre} bienvenid@`;

console.log(saludo);


//Plantillas HTML

let plantilla = `
<htm>
    <h1>Título H1 ${nombre}</h1>
    <p>Este es un párrafo</p>
</htm>
`

console.log(plantilla);


//Introducción de variables en HTML

let libros = ["empieza por el por qué", "El monje qye vendió su ferrari", "El poder del ahora"];
