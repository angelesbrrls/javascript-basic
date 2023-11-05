// Operador .valueOf() - Pbtener valores numéricos apartir de literales

let a = 2;
let b = new Number(3);

console.log(a)
console.log(b)
console.log(a + b)
console.log(a.valueOf() + b.valueOf())
console.log(b.valueOf())

let str = new String ("Hola soy un str")
console.log(str)
console.log(str.valueOf())

// NaN (Not A Number) - Infinity

let n = Number('adios')
console.log(n) // Error no es un número
console.log(isNaN(n)) // No es un número

let num = 19;
let divisor = 2;
let divisor0 = 0;
let divisorNull = null;

console.log(num / divisor)
// Infinity
console.log(num / divisor0)
console.log(num / divisorNull)

// Como convertir los strins a valores numéricos con Number, parseint y parseFloat

let num1 = '5.89';
let num2 = 17.2
console.log(typeof num1)
console.log( num1 + num2) // Incorrecto!!! Concatenando
// Number para sumar
console.log(Number(num1) +  num2)
// parseInt
console.log(parseInt(num1))
// parseFloat
console.log(parseFloat(num1))

let num3 = 4;
console.log(parseInt(num3))
console.log(parseFloat(num3))


// Números hexadecimales (base 16)

let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16))

// Obtener los valores máximo y mínimo en JS

let min_precisión = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE
let max_valor_JS = Number.MAX_VALUE

console.log(min_precisión) // 0.0000000000000000222
console.log(min_valor_JS)
console.log(max_valor_JS)
console.log(2 ** 1023) // Para elevar

