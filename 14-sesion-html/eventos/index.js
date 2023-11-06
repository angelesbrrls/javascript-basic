const hh1 = document.getElementById("h-h1");
console.log(hh1)

hh1.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    hh1.innerText = evento.detail.texto
    hh1.style.color = evento.detail.color
})

function cambiarTexto(nuevoT, color){
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoT,
            color: color
        }
    })
    hh1.dispatchEvent(evento)
}