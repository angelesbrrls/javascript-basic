// Trabajando con fechas

const fecha = new Date()
console.log(fecha)

// Atención - Los meses inicializan en 0 (0 - Ene, 11 - Dic)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha2)

// Milisegundos positivo y negativo
const fecha3 = new Date(1000000000000)
console.log(fecha3)

// Strings
const fecha4 = new Date("Octuber 10, 2004 12:15:01")
console.log(fecha4)

// Comparaciones

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5)

console.log(fecha > fecha2)
console.log(fecha < fecha2)
console.log(fecha2 === fecha5) // ERROR - NO SE PUEDEN COMPARAR FECHAS DE ESTA MANERA

// Comparar .getTime()
console.log(fecha2.getTime() === fecha5.getTime()) // OK

// Obtener día, mes y año

// Día getdate()
console.log(fecha2.getDate())
// Mes getMonth()
console.log(fecha2.getMonth() + 1 )
// Año .getFullYear()
console.log(fecha2.getFullYear())

// Fecha en un string - formato
console.log(fecha2)
//.toLocaleDateString() 
console.log(fecha2.toLocaleDateString('es-MX'))
console.log(fecha2.toLocaleDateString('en-US'))

