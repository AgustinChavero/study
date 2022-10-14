//Solamente dejar pasar a los mayores de edad
//Si es el primero en llegar a las 2 no paga
//------------------------------------------

//var edad = prompt("¿Cual es tu edad?");

//if (edad >= 18) {
//    alert ("Adelante")
//} else if (edad < 18) {
//    alert ("No se permite el ingreso de menores")
//}
//------------------------------------------
let free = false;

const verificacion = (time) => {
    let edad = prompt ("¿Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert ("Pasa gratis");
            free = true;
        } else {
            alert ("Puede pasar al abonar su entrada");
        }
    } else {
        alert ("No se admiten menores")
    }
   
}

const filtro = function (time) {
    let edad = promp ("¿Cual es su edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert ("Pasa gratis");
            free = true;
        } else {
            alert ("La entrada sale 10usd, pase");
        }
    } else {
        alert ("No se admiten menores")
    }
}

verificacion(43);
verificacion(29);
verificacion(15);
verificacion(17);
verificacion(20);
verificacion(18);
verificacion(58);

filtro(23);
filtro(17);
filtro(18);
filtro(20);
filtro(16);