//Mostrar 3 celulares y sus propiedades
//Cada uno debe tener color, peso, resolucion de pantalla de camara,
//    resolucion de pantalla y memoria RAM
//Deben poder prender, reiniciar, tomar fotos y grabar ///COMPLETADO

//Implementar todas estas cualidades en celulares de alta
//    gama. Graban en camara lenta, tienen reconocimiento facial
//    y una camara extra.   ///COMPLETADO
//----------------------------------------------------------------

class Celular {
    constructor(color, peso, rdc, rdp, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionCamara = rdc;
        this.resolucionPantalla = rdp;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    botonEncendido () {
        if (this.encendido == false) {
            alert("Iniciando celular");
            this.encendido = true;
        } else { //agrego el metodo apagar porque sino no se puede apagar el celular
            alert("Apagando celular");
            this.encendido = false
        }
    }
    opcionReiniciar () {
        if (this.encendido == true) { //un reiniciado tiene que ser completo
            alert("Reiniciando");
            this.encendido = false;
            this.encendido = true;
            alert("Reiniciado");
        } else {
            alert("Esta apagado");
        }
    }
    tomarFoto () {
        alert(`foto tomada en resolucion de: ${this.resolucionCamara}`)
 
    }
    grabarVideo () {
        alert(`grabando video en ${this.resolucionCamara}`)
    }
    info(){
        return `
        Color: ${this.color} </br>
        Peso: ${this.peso}</br>
        Resolucion de camara: ${this.resolucionCamara} </br>
        Resolucion de pantalla: ${this.resolucionPantalla} </br>
        Memoria RAM: ${this.memoriaRam} </br>
        `
    }
}

class CelularAltaGama extends Celular { //Herencia
    constructor(color, peso, rdc, rdp, ram, ce) {
        super(color, peso, rdc, rdp, ram);
        this.resolucionCamaraExtra = ce;
    } camaraLenta () { 
        alert(`Grabando en camara lenta`)
    } reconocimientoFacial () {
        alert(`Iniciar reconocimiento facial`)
    } infoAltaGama () {
        return this.info() + `Resolucion camara extra: ${this.resolucionCamaraExtra}`
     } 

} //Todos los metodos podrian tener el codigo correspondiente para realizar lo que indica su nombre
        //pero recordar que esto es una practica. Lo complejo viene despues pero sera aplicado con la misma logica
 
celularTukiTuki = new Celular ("azul", "150g", "full hd", "1080", "8 ram");
celularPuca = new Celular ("rojo", "140g", "full hd", "720", "6 ram");
celularPunk = new Celular ("negro", "130g", "full hd", "1200", "6 ram" );

celularRush = new CelularAltaGama ("blanco", "100g", "full hd", "4k", "10 ram");
celularTuco = new CelularAltaGama ("negro", "120g", "full hd", "4k", "16 ram");
 
//Llamado de metodos----------
// botonEncendido();
// opcionReiniciar();
// tomarFoto();
// grabarVideo();
// botonEncendido();

//reconocimientoFacial();
//infoAltaGama(); 
//----------------------------




document.write(`
    ${celularTukiTuki.info()}<br>
    ${celularPuca.info()}<br>
    ${celularPuca.info()}<br>

`)

document.write(`
    ${celularRush.infoAltaGama()}<br>
    ${celularTuco.infoAltaGama()}<br>
`)