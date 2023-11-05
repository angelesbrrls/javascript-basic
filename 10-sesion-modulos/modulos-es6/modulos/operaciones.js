export function sumatoria(a, b){
    return a + b
}

export function multiplicacion (a, b){
    return a * b
}

export function exponencial (a, b){
    return a ** b
}

export function factorial (a){
    let factorial = 1;
    for (let index = 2; index <= a; index++) {
        factorial *= index;
    }
    return factorial
}

export const nombre = "MATEMATICAS";

