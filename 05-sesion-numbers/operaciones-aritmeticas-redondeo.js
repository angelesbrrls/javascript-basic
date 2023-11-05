// Principales operaciones aritméticas

let a = 3.5;
let b = 4.8;

// suma (+)
console.log(a + b);
// resta (-)
console.log(a - b);
// multi (*)
console.log(a * b);
// div (/)
console.log(a / b);

// Representación de los números en cadenas de texto

console.log(typeof a)
let a_str = a.toString();
console.log(typeof a_str)

// Redondeo de números decimales

let c = 3.3;
let d = c * 3;

console.log(d)
console.log(typeof d)
// .toFixed(x) - Limitar el num de decimales al valor x
console.log(d.toFixed(4))
console.log(typeof d.toFixed(4))

let e = 1839.1232456789
let f = 2412423423;
console.log(e.toFixed(2))
console.log(f.toFixed(2))

// .toPrecision(x) - Limita el número de cifras significativas
console.log(e.toPrecision(7))
console.log(f.toPrecision(7))
console.log(typeof f.toPrecision(7))