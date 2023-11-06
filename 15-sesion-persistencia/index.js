// localStorage

// Tipos primitivos
//localStorage.setItem("nombre", "Selegna")
//console.log(localStorage.getItem("nombre"))

// Objeto
// Incorrecto: localStorage.setItem("persona", { nombre: "maria", edad: 35 })
//localStorage.setItem("persona", JSON.stringify({ nombre: "maria", edad: 35 }))
//console.log(JSON.parse(localStorage.getItem(persona)))


// JSON.stringify -> convierte un objeto/array en string
// JSON.parse -> convierte un objeto/array (JSON.stringify) en un objeto JS

localStorage.removeItem("nombre")

// sessionStorage

sessionStorage.setItem("nombre-sesion", "Selegna")

// Cookies
document.cookie = "nombreCookie=Selegna"
document.cookie = "nombreCaducidad=Nombre; expires=" + new Date(2023, 11,1).toUTCString()
console.log(document.cookie)

