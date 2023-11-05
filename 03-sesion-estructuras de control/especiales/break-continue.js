//Casos muy específicos

let lista = [1,2,3,4,5,6,7,8];

for (let index = 0; index < lista.length; index++) {
    if (lista[index] === 3 ){
        continue;
    }
    var j = 100;
    const k = 100;
    console.log(lista[index]);

    if (lista[index] > 5 ){
        break;
    }    
}

//¿Cuál es el ámbito de un bucle?
//console.log(index); //alcance solo del bloque
//console.log(k); //alcance solo del bloque
console.log(j); //es un var, alcance global
