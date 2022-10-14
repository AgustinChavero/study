//Pantalla debe ser al menos full HD
//Preguntar si esta seguro al momento de
//    realizar la compra
//--------------------------------------

let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

//screen.availHeight es la altura de la window maximizada
//Mientras que screen.height es el alto total
//Mismo sistema para width

comprar = confirm(`Alto de ${alto}, ancho de ${ancho}`);

if (comprar) {
    alert("Compra realizada");
} else {
    alert("Compra cancelada");
}

comprar2 = confirm(`Full HD`);

if (comprar2) {
    alert("Compra realizada");
} else {
    alert("Compra cancelada");
}