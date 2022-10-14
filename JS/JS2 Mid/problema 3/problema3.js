//Sitema de incripcion de notas
//    Interfaz para introducir notas
//    Validar que no haya errores
//    Promediar notas con trabajos
//        Si el promedio es mayor a 7: aprobar
//__________________________________________________________/

const sendButton = document.getElementById ('snd-nota');

sendButton.addEventListener("click", ()=>{
    let resultado, mensaje;
    try {
       prevRes = parseInt(document.getElementById('nota').value);
       if (isNaN(prevRes)) {
        throw "Imposible";
       }
       mesanje = definirMensaje(prevRes);
       resultado = verificarAprobacion(8,5,prevRes);
    } catch (e) {
        resultado = "No";
        mensaje = "Not found"
    }
    abrirModal(resultado, mensaje);
})
const definirMensaje = (pr)=> {
    let resultado;
    switch (pr) {
        case 1: resultado = "Desaprobado con 1";
        break;
        case 2: resultado = "Desaprobado con 2";
        break;
        case 3: resultado = "Desaprobado con 3";
        break;
        case 4: resultado = "Desaprobado con 4";
        break;
        case 5: resultado = "Desaprobado con 5";
        break;
        case 6: resultado = "Desaprobado con 6";
        break;
        case 7: resultado = "Aprobado con 7";
        break;
        case 8: resultado = "Aprobado con 8";
        break;
        case 9: resultado = "Aprobado con 9";
        break;
        case 10: resultado = "Aprobado con 10";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes)=> {
    promedio = (nota1 + nota2 + prevRes) / promedio.length;
    if (promedio >= 7) {
        return "<span class = 'green'> Aprobado </span>";
    }
    return "<span class='red'> Desaprobado </span>";
}


const abrirModal = (res, msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}