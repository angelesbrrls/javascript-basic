function sumatoria(a, b){
    return a + b
}

function multiplicacion (a, b){
    return a * b
}

function exponencial (a, b){
    return a ** b
}

function factorial (a){
    let factorial = 1;
    for (let index = 2; index <= a; index++) {
        factorial *= index;
    }
    return factorial
}

// Se estan haciendo "públicas"
module.exports = {
    sumatoria,
    multiplicacion,
    exponencial,
    factorial

}