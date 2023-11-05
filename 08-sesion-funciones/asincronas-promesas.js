// Funciones asíncronas

function miAsinc(){
    // LLamada a db externa - puede generar algún error
}

const miPromesa = new Promise ((resolve, reject) => {
    const i = Math.floor(Math.random() * 2 )
    if(i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("se ha ejecutado de manera correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo siempre al final"))
