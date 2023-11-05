class Persona {
    // Private -> # Sólo se puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protected -> _ Sólo se puede acceder desde dentro de la clase y desde clases descendientes o heredadas
    _isDeveloper = true
    constructor(nom, ed) {
        this.#nombre = nom
        this.#edad = ed
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}.`)
    }

    obtenNombre() { // Es una función getter -> Permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Selegna", 20)
// console.log(persona)
// console.log(persona.nombre)
// persona.saludo()
// console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad())
// console.log(persona._isDeveloper)


// Getter -> Permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setter -> Permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(15)
console.log(persona.getEdad())