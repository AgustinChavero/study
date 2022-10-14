//Indicarle las 20 llaves posibles con 4 imagenes y cofla debe
//    seleccionar cual llave usar
//Una vez seleccionada enviar los datos al servidor y que otro 
//    programador se encargue
//------------------------------------------------------------

const contenedor = document.querySelector(".flex-container");

let contador = 0;
function crearLlave(nombre, modelo, precio) {
    contador++;
    nombre =`<h2>${nombre}</h2>`
    modelo =`<h2 id='${modelo}'>${modelo}</h2>`
    precio =`<p>Precio: $${precio}</p>`;
    return [nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();

for (var i = 0; i < 21 ; i++) {
    let modelo = Math.round(Math.random()*8+200);
    let precio = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modelo}`,
        precio);

    let div = document.createElement("DIV");
    div.tabIndex = i;

    div.classList.add(`item-${i}, flex-item`);
    div.innerHTML = llave[0] + llave [1] + llave [2] + llave [3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);



