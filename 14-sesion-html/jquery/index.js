// $(selector).accion()
// Ejemplo:
// $("li").hide()
// Selectores: "#id" , ".clase"

// Completa: Esto se ejecuta una vez cargado el documento
// $(document).ready(() => {
// })

// Simplificada: 
$(() => {
    //$("#el-1").hide()
    $(".hide-btn").click(() =>{
        console.log("ocultando ... ")
        //$("h1").hide()
        $("h1").fadeOut() // Otra forma de ocular simulando desvanecimiento
    })
    $(".show-btn").click(() =>{
        console.log("ocultando ... ")
        //$("h1").show()
        $("h1").fadeIn()
    })
    $("li").dblclick(() => {
        $("h1").css({ color: "red" })
    })
    $(".new-ele").click(() => {
        //$("ul").append("<li>Elemento New</li>")
        $("ul").prepend("<li>Elemento New</li>")
    })
    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue" // JS Nativo
    })
    $("li").mouseleave((elem) => {
        elem.target.style.color = "black" // JS Nativo
    })
})

