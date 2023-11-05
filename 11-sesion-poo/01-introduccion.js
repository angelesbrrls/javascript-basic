const persona = {
    nombre: "Selegna",
    edad: 30,
    isDeveloper: true,
    saludo: function() {
        console.log('Hiii')
    }
}

// console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Star",
    edad: 25,
    isDeveloper: false,
    saludo: function() {
        console.log('Hiii')
    }
}

otra_persona.saludo()

// Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre
        edad, // edad: edad
        isDeveloper, // isDeveloper: isDeveloper
        saludo: function() {
            console.log('Hiii')
        }
    }
}

const nueva_persona = creaPersona("Persona1", 20, true)
console.log(nueva_persona)

const nueva_persona_2 = creaPersona("Persona2", 40, false)