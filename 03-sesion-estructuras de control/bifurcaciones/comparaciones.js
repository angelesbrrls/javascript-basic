//Comparaciones

//Igualdad
// == débil : solo compara el valor
// === fuerte : compara el valor y el tipo

let a = 5;
console.log(typeof a);
let b = 5;
console.log(typeof b);
let b1 = "5";
console.log(typeof b1);

if( a == b ){ 
    console.log("a es igual a b - Débil ")
}

if( a === b ){ 
    console.log("a es igual a b - Fuerte ")
}

if( a == b1 ){ 
    console.log("a es igual a b1 - Débil ")
}

if( a === b1 ){ 
    console.log("a es igual a b1 - Fuerte ")
}

if( b == b1 ){ 
    console.log("b es igual a b1 - Débil ")
}

if( b === b1){ 
    console.log("b es igual a b1 - Fuerte ")
}


let c = 4;
let d = 10;
let d1 = "4";

if (c != d){
    console.log("c es diferente a d - Débil ")
}
if( c !== d ){ 
    console.log("c es diferente a d - Fuerte ")
}

if( c != d1 ){ 
    console.log("c es diferente a d1 - Débil ")
}

if( c !== d1 ){ 
    console.log("c es diferente a d1 - Fuerte ");
}

//Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min");
}
if (max >= min) {
    console.log("max es mayor o igual que min");
}
if (max >= 10) {
    console.log("max es mayor o igual que 10");
}


if (min = max) {
    console.log("min es menor que max");
}
if (min <= max) {
    console.log("min es menor o igual que max");
}
if (min <= 10) {
    console.log("min es menor o igual que 10");
}