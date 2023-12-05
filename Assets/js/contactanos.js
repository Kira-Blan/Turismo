
//Constante para que obtenga los datos de la página
const sendBtn = document.getElementById("enviar")

sendBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const name = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const telefono = document.getElementById("telefono").value
    const asunto = document.getElementById("assunto").value
    const mensaje = document.getElementById("mensaje").value
    

//Condicionales
    if (name === "" || typeof name !== "string") {
        alert("No olvide indicar su nombre");
        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
        alert("Ingrese un e-mail, por favor.");
        return;
    }


    if (asunto === "" ) {
        alert("Ingrese Asunto");
        return;
    }

    if (mensaje === "") {
        alert("Ingrese por favor un Mensaje.");
        return;
    }


//Enviar el mail
    const mailto = `
        mailto:consultas@grupotrece.com?subject=Mensaje de ${name}&body= telefono: ${telefono}%0D%0A%0D%0AAsunto: ${asunto} %0D%0A%0D%0AMensaje:${mensaje}%0D%0A%0D%0AEmail de contacto: ${email}`
    window.location.href = mailto

//Se limpian los datos al enviarse
    document.getElementById("nombre").value = ""
    document.getElementById("email").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("assunto").value = ""
    document.getElementById("mensaje").value = ""
})

//Se puede borrar los datos completos si se equivocan al escribiros
const cleanBtn = document.getElementById("clean-btn")
cleanBtn.addEventListener("click", (evento) => {
    evento.preventDefault()
    document.getElementById("nombre").value = ""
    document.getElementById("email").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("assunto").value = ""
    document.getElementById("mensaje").value = ""
})