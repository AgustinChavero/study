//Poder enviar un formulario
//    Debe contener nombre, mail, y materia
//        adeudada
//    Validar mails y nombres
//    Enviar al servidor de manera pulida
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validar();
    if (error [0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {
        resultado.innerHTML = "Solicitud enviada";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
}); 

const validar = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "Nombre Invalido";
        return error;
    } else if (email.value.length < 5 ||
                email.value.length > 40 ||
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "Mail Invalido";
        return error;
    } else if (materia.value < 4 || materia.value > 40) {
        error[0] = true;
        error[1] = "Materia invalida";
    }

    error[0] = false;
    return error;
}