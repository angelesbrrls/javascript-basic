// Carga y Sobrecarga

function saludar(){
    hola()
}

function hola(){
    console.log("Hola!, funcion hola")
}

saludar()

    /* 
    1. global()
    2. saludar () global ()
    3. hola() saludar() global()
    4. saludar() global()
    5. global()
    */


// Función recursiva

function recursiva(){ // se ejecuta infinidad de veces
    recursiva()
}
