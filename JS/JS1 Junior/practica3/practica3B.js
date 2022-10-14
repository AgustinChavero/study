 //Crear un sistema para decidir que app descargarse 
//Debe contenes la cantidad de descargas, puntuacion y peso
//Se deben poder instalar, abrir, cerrar y desinstalar
//-----------------------------------------------------

class App {
    constructor (descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalado = false;
        this.iniciado = false;
    }
    instalar () {
        if (this.instalado == false) {
            this.instalado = true;
            alert("Instalada");
        } else {
            alert("Ya esta instalada")
        }
    }  
    abrir() {
        if (this.iniciado == false && this.instalado == true) {
            this.iniciado = true;
            alert("Abriendo");
        }
    }
    cerrar() {
        if (this.iniciado == true) {
            this.iniciado = false;
            alert("Cerrando");
        }
    } 
    desintalar(){
        if (this.instalado == true) {
            this.instalado = false;
            alert("Desinstalada");
        }
    }
    infoApp(){
        return `
        Descargas: ${this.descargas} </br>
        Puntuacion: ${this.puntuacion}</br>
        Peso: ${this.peso} </br>
        `
    }
}

jumanji = new App ("30.000", "4 estrellas", "30mb");
avatar = new App ("100.000", "5 estrellas", "120mb");
armagedon = new App ("80.000", "4 estrellas", "50mb");

jumanji.instalar();
jumanji.abrir();
jumanji.cerrar();
jumanji.desintalar();

document.write(`
    ${jumanji.infoApp()};
    ${avatar.infoApp()};
    ${armagedon.infoApp()};    
`);
 