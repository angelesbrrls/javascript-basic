const boton = document.querySelector("#btn")
console.log(boton)

boton.addEventListener("click", () => {
    //alert("Presionó el botón")
    //confirm("¿Confirma?") && console.log("OK")

    // Optimizado
    //confirm("¿Confirma?") 
    //? console.log("Confirmó")
    //: console.log("Canceló")

    // otra forma
    const respuesta = confirm ("Confirma")
    if (respuesta){
        console.log("Confirmó - respuesta")
    } else {
        console.log("Canceló - respuesta")
    }
})


const botonInfo = document.querySelector("#btn-info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Tu nombre es?")
    if (nombre){
        console.log("Hola " + nombre)
    } else {
        console.log("Hola anónimo")
    }
})

const lista = [
    {
        nombre: "Selegna1",
        edad: 35
    },
    {
        nombre: "Selegna2",
        edad: 36
    }
    ,{
        nombre: "Selegna3",
        edad: 37
    }
]

console.table(lista)