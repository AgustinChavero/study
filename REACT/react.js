//Es una mezcla de HTML, CSS y JS
//Siendo reutilizable
//Interactua con el usuario

//Componente----------------------------------------------
    //Parte de la interfaz de usuario independiente y reusable
    //Independiente porque cada componente tiene un cierto estado
        //y funcionalidad especifica, independiete de otros

    //Funcionales
        //Son mas concisos
        //Funcion de JS que retorna un elemento de React (JSX)
    function Saludo0 (props) {
        return <h1>¡Hola, {props.nombre}!</h1>;
    }
        //Deben iniciar con letra mayusculas
        //Puede recibir valores, props (properties)
            //Argumento que recibe un componente
            //Los props solo pueden ser enviados de padre a hijo
                //es decir de A hacia B
    //De Clase
        //Clase de ES6 que retorna un elemento JSX
    class Saludo1 extends React.Component {
        render () {
            return <h1>Hola, {this.props.nombre}</h1>;
        }
    }
        //Debe extender React.Component
            //importante para no crear una clase normal sino
            //que extiende la funcionalidad de React
        //Debe tener un metodo render para retornar JSX
        
        //Estado
            //Representacion en JS del conjunto de propiedaddes (info sobre el componente)
            //de un componente y sus valores actuales
    //Hooks
        //Funcion especial que permite trabajar con estados
            //en componentes funcionales sin escribir un
            //componente de clase
//JSX-----------------------------------------------------
    //Extension de React para la sintaxis
    //Nos permite describir en JS como se veran los componentes
    
    //JSX es siempre opcional
    
    //React DOOM
        //Paquete que facilita la interaccion y
            //actualizacion del doom en aplicaciones React
        //Atributos del DOOM reconocidos por React
            link = "https://reactjs.org/docs/dom-elements.html";

    //Elementos
    const elementoHTML = <h1>Hola</h1>;
        //Siendo este el elemento mas pequeño a crear en JSX
        //Los componentes esta hechos de elementos
        //Con JSX se puede crear cualquier elemento HTML

        //Estos elementos se representan con etiquetas en letras
            //minusculas mientras que los componente comienzan con
            //letra mayuscula
        //Podemos agregar atributos para especificar ciertas caracteristicas
            //pero se escriben de forma distinta. Por EJ:
            <h1 className="titulo"></h1>;
            <label htmlFor="css"></label>;

    //CSS
        //background-image
        backgroundImage //JSX
        //font-family
        fontFamily //JSX
        //Para agregar un CSS a un div en especifico:
        const estiloDiv = {
            color: 'yellow',
            backgroundColor: 'black'
        };
        <div style={estiloDiv}>Hola</div>; //De esta manera le agregamos el estilo

            //Sino una alternativa es:
            <div style={{color: 'yellow'}}>Hola</div>; 
            //Aplicable para cuando hay poco codigo
    //Estructura de un componente
        //Se pueden anidar igual que HTML
        //Existen elementos con solo etiqueta de apertura al igual
            //que en HTML, como img por ejemplo
    //Renderizar Componentes
        //Dentro de HTML ira un div
            <div id="root"></div>
            //Donde se agregara todo
        //De esta manera lo agregamos
        
        const elemento1 = <h1>Hola</h1>;
        ReactDOM.render ( //ReactDOM sdebe ser importado
            elemento1, //Elemento a renderizar
            document.getElementById('root') //Contenedor
        );
        //De la siguiente manera lo importamos
        import ReactDOM from 'react-dom';
    //Escribir JS
        //Para poder realizar esto debemos utilizar {} donde ira el 
            //codigo de js
        let adjetivo = "interesante";
        <p>React es {adjetivo}</p>;
        //Se puede escribir cualquier expresion valida de JS y su
            //valor en el JSX sera reemplazado por lo que haya en la
            //variable
        <p>El resultado es: {5*6}</p>;
        //Tambien se pueden aplicar metodos
        let nombre = "Gino";
        <p>Su nombre es: {nombre.toUpperCase()}</p>;
//Crear una aplicacion de React-----------------------------
    //Primero en la carpeta correspondiente hay que instalar
        //todo lo que haga falta desde git bash con el comando
        //npx create-react-app nombre-de-la-carpeta
    //Con npm start abriremos un servidor local para testear
        //la aplicacion correspondiente
    //La primer carpeta tendra los modulos de Node
    //La carpeta public contendra:
        //Icon: icono de pestaña
        //HTML ya creado con su root correspondiente
        //Imagenes PNG como logos
        //Manifest contendra informacion sobre caracteristicas de la aplicacion
    //Carpeta SRC
        //Almacenaremos todos los archivos que contengan codigo fuente
        //Archivos css, js, imagenes, archivo test, etc
 
    //Gitignore le dice a git que archivos ignorar
    //Package-lock contendra informacion de la aplicacion
        //paquetes a usar y modulos de node
    //Package contendra scrips para cada tipo de comando y dependencias
    //SRC contendra el index.js donde se importara tanto las dependencias de
        //de react, como las del doom, el css y la app
        

    //React Rooter DOOM
    //En la pagina web esta el comando actualizado, añadir al proyecto
        //Para ver las otras paginas relacionada, creamos una carpeta llamada Pages
        //Dentro de Pages colocaremos las diferentes paginas de la web
        //en el app.js que es la pagina principal de nuestra creacion
        //llamamos a 
        import { BrowserRouter} from 'react-router-dom';
        //Tambien podemos llamarlo de una manera especifica con as
        import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
        //Generamos un Router que va a encapsular todas las demas rutas
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to = "/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </Router>
        //Para que nos lleve tenemos que importar las paginas
        import Contact from './pages/Contact';

        //Y luego para terminar vinculamos los links de esta manera
        <Routes>
            <Route path="/contact" element = {<Contact/>}/>
        </Routes>
        //Repetimos este proceso cuanto nos haga falta en base a las paginas que tengamos
            //dentro de Pages

    //Manejo de API mediante REST

        //Mediante el uso de boton realizamos toda la peticion en una constante:
        const [characters, setCharacters] = useState (null);

        const reqApi = async () => {
            const api = await fetch ('https:https://api.com/especificacion');
            const characterApi = await api.json();

            setCharacters(characterApi.results);
        };
        //Dicho btn se vera asi:
        <button onClick={reqApi}>Texto</button>;

    //Componentes
    //En la pagina de componentes abra un js con lo siguiente
        export default function Characters (props) {
            <div>
                
            </div>
        }
    //Aplicando ternarios
        <div>
            <div>
                {characters ? ( //Cuando contenga algo mostrara los characters sino el img y button
                    <Characters characters={characters} />
                ): (    //Hay que encapsular el html en este caso
                    <> 
                    <img src = {image}/>
                    <button onClick={reqApi}>Texto</button>;
                    </>
                )}
            </div>
        </div>
    //Para tratar los datos, trabajando en el componente en el que pusimos los ternarios

        export default function Characters (props) {
            const { characters } = props;

            return (
                <div className='forEach'>
                    {characters.map((character, index) => (
                         <div key={index}>
                            <div>
                                <img src={character.image}/>
                            </div>
                            <div>
                                <h3>{character.name}</h3>
                                <h6>{character.status}</h6>
                                <p>{character.episode.length}</p>
                            </div>
                         </div>
                    ))}
                </div>
            )
        }
    //Con todo lo anterior vamos a poder manejar cualquier API mediante REST
    