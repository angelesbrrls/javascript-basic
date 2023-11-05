//Buckes For

//for (inicialización; condición; actualización){
//  Esto es el bucle
//}

for (let i = 0; i < 10; i++) {
    console.log(i)
}


let lista = [1,4,6,8,10,12,800];

for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]*2); 
}

for (const valor of lista) {
    console.log(valor);
}

lista.forEach(valor => {  
    console.log(valor);
}); //Función Flecha

//Estructura for ... in
let persona = {
    nombre: "Aaaa",
    apellido: "Bbb",
    edad: "39",
    isDeveloper: true
}
let prop = "edad";
console.log(persona[prop])

for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);

}