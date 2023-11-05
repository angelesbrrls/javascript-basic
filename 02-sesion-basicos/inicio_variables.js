var variable_;
let variableLet_;

const constante = "Hola soy constante";
console.log(constante);
// constante = "ey" no es posible reasignar

var a = 1;
console.log(a);
a = 4
console.log(a);


let b = 3;
console.log(b);
b = 5;
console.log(b);

//Diferencia  var vs let

var variable = "Soy VAR 1"
for (var i=0; i<3; i++){
    var variable = "Soy VAR 2";
}
console.log(variable)


let variableLet = "Soy LET 1"
for (var i=0; i<3; i++){
    let variableLet = "Soy LET 2";
}
console.log(variableLet);


// TypeOf

console.log(typeof 2)
console.log(typeof variable)
console.log(typeof variableLet)
console.log(typeof variableLet_)