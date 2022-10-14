//Para crear carpeta de React
    //ctrl + ñ
    //npx create-react-app nombre-del-proyecto
    
//Testimonios---------------------------------

//Componentes que haran falta
    //Contenedor principal
    //Imagen a la izquierda
    //Texto a la derecha donde tendra 2 titulos
    //
//Exportacion
    //Nombrada, exportamos varios elementos de un mismo archivo, especificando
    export function Testimoni(){return (<div></div>)};
    import {Testimoni} from './componentes/Testimoni';
    //Por defecto, te permite decir cual va a ser el unico componente exportado
    import Testimoni from './componentes/Testimoni';
    export default Testimoni;
//CSS
    //A la hora de agregar estilo, se crea una archivo CSS
        //por cada archivo JSX que exista, asi es mas facil
        //poder hacer cambios individualmente
    
    //En el APP.JS usualmente vamos a colocar estilos generales
//Por que necesitamos props
    //React busca ayudar a crear componentes reusables
    //Esto lo realizamos medriante props
    <p className=''>{props.nombre} en {props.pais}</p>;
    <p className=''>{props.cargo} en {props.empresa}</p>;
    <p className=''>{props.testimoni}</p>;
    //Para pasar props el componente que lo renderiza al testimonio debe enviarle props
//Contador de Clicks--------------------------
    //La importacion de React solamente es importante cuando trabajamos con hooks
    //u otros elementos de el, por las dudas siempre es mejor tenerlo importado
//Para usar sintaxis de destructuracion podemos pasar el nombre integro
    //del prop y citarlo bajo corchetes {}
    function but ({ texto, esBotonClic, clic }) {
        {texto}
    }
    //de esta manera nos ahorramos el tener que colocarlos como vimos arriba con:
    {props.texto};
//Para ejecutar un condicional debemos primero pasar como props la definicion
    <button className={esBotonDeClic ? 'boton-clic': 'boton-reiniciar'}></button>;
    //El className es el props pasado, el condicional estara marcado por el signo 
    //de pregunta, y las opciones para definirlos seran los marcados en comillas

//Para aplicar un estilo u otro, luego de exportar, e importar
    //en el archivo que importa todo esto, debemos definir lo siguiente
    <Boton texto='Clic' esBotonDeClic={true}/>;
    <Boton texto='Reiniciar' esBotonDeClic={false}/>;
    //De esta forma definimos el resultado del valor booleano

//De la siguiente manera se importa un hooks
    import { useState} from 'react';
//Para trabajar con estados en React hacemos lo siguiente
const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  };
  //En esta funcion pasamos los props en primera instancia entre
    //las llaves, el useState declara el valor inicial, y luego llamamos
    //dentro de las funciones flechas a los valores que queremos que sean modificados
//Para mostrarlo hacemos:
    <Contador numClics={numClics}/>
    //Y estaremos mostrando las modificaciones de interacciones
//Calculadora Interactiva----------------------
