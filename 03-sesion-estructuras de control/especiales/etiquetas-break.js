
//break y continue
//labels - etiquetas



// sin
let unidades = 0;
let decenas = 0;
while (true) {
    while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++;
        if(unidades === 10){
            unidades = 0
            break;
        }
    }
    decenas++;
    if (decenas === 2){
        break;
    }
}
console.log("Ya hemos terminado Opción 1")
console.log("-----------------------------------")
//con 
unidades = 0;
decenas = 0;
bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++;
        if(unidades === 10){
            unidades = 0
            break bucleUnidades
        }
        if (decenas === 2){
            break bucleDecenas
        }
    }
    decenas++;
}
console.log("Ya hemos terminado Opción 2")

