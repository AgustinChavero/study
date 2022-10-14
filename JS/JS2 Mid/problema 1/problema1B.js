//Mostrar suficientes datos para conocer
//    el sitio web desde adentro de la 
//    pagina web
//--------------------------------------

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: ${protocol}<br>`;
html += `Hostname: ${hostname}<br>`;
html += `Pathname: ${pathname}<br>`;
html += `URL: ${href}<br>`; //Con este alcanza, pero no esta de mas separarlo y explayar

document.write(html);