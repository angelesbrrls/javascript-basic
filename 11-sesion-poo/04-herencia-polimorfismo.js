class Persona {
    _nombre // protegido - solo se puede acceder por medio de la herencia
    _edad // protegido - solo se puede acceder por medio de la herencia
    constructor(nom, ed) {
        this._nombre = nom
        this._edad = ed
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad}.`)
    }
}

// Herencia 
class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
    // Polimorfismo
    saludo(){
        super.saludo()
        console.log(`Soy Desarrolladora de ${this.lenguaje}`)
    }
}

const nuevoDev = new Desarrollador("Selegna", 30, 'Java, JS')
console.log(nuevoDev);


// Polimorfismo
nuevoDev.saludo()