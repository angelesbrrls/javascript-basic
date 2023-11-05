// Listas, array o arreglo

const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0]="primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "MarcaMovil X",
    isWhite: false,
    contactos: ["contact1", "contact2", "contact3"],
    tarjeta:{
        marca: "MarcaTarjeta X",
        almacenamiento: 32
    },
    "altura-tarjeta": 4  // Para que acepte -
}

console.log(movil.contactos);
console.log(movil.tarjeta.marca);

movil.anio = 2019;
console.log(movil.anio);

movil.marca = "MarcaMovil Y";
console.log(movil.marca);


// Fechas  (Existen librerías de apoyo Moments.js)

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // Utilizando milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();

console.log(dia, mes, anio);