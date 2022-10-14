//REPL

    //Read Evaul Print Loot

        //Nos permite escribir codigo JS para evaluarlo en el terminal

    
//Modulos en Node

    //Funcionalidad organizada en uno o varios archivos
        //JS que puede ser reutilizada en una app


    //Un ejemplo de creacion:
        //Creamos una funcion en un archivo js
        //Luego vamos a la comunicacion entre modulos
    //En la comunicacion de modulos debemos exportar e importar los modulos
        //danto acceso a otros modulos

        module.exports //Con esto exportamos todo lo que se ecuentra en el archivo
        //Module es considerado un objeto asi que lo tratamos como tal
        module.exports.Funcion = Funcion;
        //Con esto llamamos a la funcion a ser exportada
        //Se define primero el nombre con el cual se va a exportar y luevo el elemento a exportar

        //Luego de esto hay que importar el modulo en donde se lo requiere mediante:
        const FuncionAnclada = require("./funcion.js");
        //Entonces ya se podra ejecutar el code
        console.log(FuncionAnclada.Funcion("Informacion")); //Debe escribirse como esta exportada
    
    //Exportar varios elementos

        //De la misma manera para la exportacion, pero se seguira importando como si fuera uno
        function funcion (data) {return 'Hello'};
        function funcion1 (data) {return 'Hello Data'};
        module.exports.funcion = funcion;
        module.exports.funcion1 = funcion1;
        const Funciones = require('./Funciones.js');
        console.log(Funciones.Funcion1());
        console.log(Funciones.Funcion());
        //Si hay que ejecutarlas por separado

        //Otra variables para exportar muchos es la siguiente

        module.exports = {
            Funcion: Funcion,
            Funcion1: Funcion1
        };

    //Sintaxis de desestructuracion y require ()
        const {Funcion1} = require ('./Funcion.js');
    //Al hacer esto no tenemos que mencionar la variable de donde proviene
        console.log(Funcion1);

//Modulos Built-in (incorporados)
    //Podemos usarlos directamente estando ya instalados

    //Un ejemplo es console que simula una consola
        //Algunas de sus funciones son:

        console.warn('Mensaje de advertencia');
        console.error('Mensaje de error grave');
        console.error(new Error('Ocurrio un error'));
            //Pasandolo como objeto se obtienen mas detalles
        
    //Modulo Process
        //Provee informacion sobre el proceso en ejecucion con cierto control sobre este
        console.log(process);
        console.log(process.env); //Da una informacion detallada del ambiente donde se ejecuta
        console.log(process.argv[1]); //Convierte todo a un array y accede a un valor individual
            for (let i = 2; i < process.argv.length; i++) {console.log(process.argv[i]);};
            //Mostrara todos los datos del array, dicho array sera la ejecucion de node app.js 6 23 57
        console.log(process.memoryUsage());//Muestra el uso de memoria en el proceso
    
    //Modulo OS (Opetaring System)
        //Permite obtener info del sistema operativo
        const os = require('os'); //Si o si hay que importar el modulo
        console.log(os.type());//Devuelve un string
        console.log(os.homedir());//Muestra el directorio principal
        console.log(os.uptime());//Muestra tiempo de ejecucion del sistema en segundos
        console.log(os.userInfo());//Muestra informacion del usuario
        
    //Modulo timers
        //Contiene funciones que ejecutan un codigo luego de un cierto periodo de tiempo
        setTimeout(nombreFuncion, 1000, argumento1, argumento2);
            //Ejemplo
            function showTheme(theme) {
                console.log(`Learning ${theme}`);
            }
            showTheme('Node'); //Lo aplica automaticamente
            setTimeout(showTheme, 5000, 'Node'); //Aplicara la ejecucion con retraso

        setImmediate(nombreFuncion, argumento1, argumento2);//Se ejecuta lo mas rapido posible de forma inmediata
            //Ejemplo
            function showTheme1 (theme) {
                console.log(`Learning ${theme}`);
            };
            console.log('Antes de');
            setImmediate(showTheme1, 'Node'); //Esto sera lo ultimo en ejecutarse al ser asincrono
            console.log('Despues de')
        
        setInterval(nombreFuncion, 1000, argumento1, argumento2) //Ejecuta un codigo infinitas veces con un retraso especifico
            //Ejemplo
            function showTheme2 (theme) {
                console.log(`Learning ${theme}`);
            };
            setInterval(showTheme2, 5000, 'Node'); //CTRL+C para parar
    
    //Modulo File System (FS)
            //Contiene funcionalidad para trabajar con el sistema de archivos
                //leer, modificar, copiar, elminar, cambiar nombre, ya sea con archivos o carpetas
                //Todos los metodos son asincronos, pero si queremos hacerlos sincronos debemos
                //agregar la palabra Sync al final fs.renameSync()
            const fs = require('fs');
            //Leer un archivo
            fs.readFile('./index.html', 'utf-8', (error, content) =>{
                if (error) {
                    console.log(error);
                } else {
                    console.log(content);
                }
            }); //Si hay un error mostrara el error con su informacion, si es nulo mostrara el contenido html en el terminal

            fs.readFile('./index.html', 'utf-8', (error, content) =>{
                if (error) {
                    throw error; //Parara la ejecucion del programa y mostrar la misma informacion que lo anterior
                } else {
                    console.log(content);
                }
            });

            //Cambiar el nombre
            fs.rename('./index.html', 'main.html', (error) => {
                if (error) {
                    throw error;
                } else {
                    console.log('Awesome')
                }
            });

            //Agregar contenido al final de un archivo
            fs.appendFile('./index.html', '<p>Hello</p>', (error) => {
                if (error) {
                    throw error;
                } else {
                    console.log('Done');
                }
            });

            //Reemplazar el contenido
            fs.writeFile('./index.html', 'New Content', (error) => { //Lo estamos suplantando por un string
                if (error) {
                    throw error;
                } else {
                    console.log('Sustitution Done');
                }
            });

            //Eliminar un archivo

            fs.unlink('./index.html', (error) => { //Se eliminara
                if (error) {
                    throw error;
                } else {
                    console.log('Eliminated');
                }
            });
            //Todo esto se puede aplicar a elementos adentro del servidor mediante la interaccion del usuario
            //Todos estos metodos no son sincronos, por lo tanto se ejecutara en cualquier orden
            //Para lograr que se ejecuten en orden colocamos Sync al final
            fs.appendFileSync();
            fs.writeFileSync();

    //NPM
        //Modulo
        //Package.json
        //Dependencia //Depende de otro paquete para funcionar correctamente

        //Crear un paquete con npm
            //npm init //Para instalar un package
        
    //JSON
        //Usado para almacenar y transportar info
        //Pares clave-valor: "tittle": "tittle-name"
        
        //Para importar el archivo JSON a un JS
            //repetimos el metodo require
        const curso = require ('./practice.json');
        console.log(curso.elementoAMostrar);

        //Para convertir de JS a JSON
        JSON.stringify();
            //Ejemplo
            let info = {
                "tittle": "Learning",
                "numView": 67890,
                "numLikes": 12345,
                "themes": [
                    "JS",
                    "Node"
                ],
                "Public": true
            }
        
            let infoStringJSON = JSON.stringify(infoObject);
            console.log(infoStringJSON); //Mostrara un string
        
        //Para una conversion de Json a JS se utiliza
        JSON.parse();
            //Ejemplo
            let infoObjectJSON = JSON.parse(infoStringJSON);
            console.log(infoObjectJSON); //Mostrara un objeto
        
        //Para instalar express
            //npm install express

    //Modulo de Eventos

        //EventEmitter
        const EventEmitter = require('events');//Llamamos al paquete de eventos
        const emisorProduct = new EventEmitter();//Creamos una nueva instancia de la clase, que nos permite emitir eventos
        emisorProduct.on('Buy', () => { //Con el ON asociamos el evento a la funcion
            console.log('Done');
        });
        emisorProduct.emit('Buy');//Se emite el evento y la funcion a la cual esta asociada
    
    //Promesas
        
        //Representa el eventual resultado de una operacion
        const promessDone = false;

        const myPromess = new Promise((resolve, reject) => {
            setTimeout (() => {
                if(promessDone) {       
                    resolve('Done');
                } else {
                    reject ('Didnt');
                }
            }, 3000)
        });

        const promessResolved = (valor) => {
            console.log(valor)
        }

        const promessRejected = (foul) => {
            console.log(foul);
        }

        myPromess.then(promessResolved, promessRejected);
    
    //Catch

        methodExample
            .then((confirmation) => {
            console.log(confirmation);
        })
            .catch((failed) => {
            console.log(failed);
        });

    //Chaining Promises y AsyncAwait
        const dataCP = require('./Tercera App/chaining-promises');
        //Ejemplo en el lugar citado
        function order(product) {
            return new Promise((resolve, reject) => {
                console.log(`Order: ${product} from Store`);
                setTimeout(()=> {
                    if (product == 'Phone') {
                        resolve('Phone Order');
                    } else {
                        reject('Not stock');
                    }
                }, 3000);
            });
        };
        
        function processOrder(response) {
            return new Promise(resolve => {
                console.log('Response in progress');
                console.log(`Response: ${response}`);
                setTimeout(() => {
                    resolve('Process Done');
                }, 5000);
            });
        };
        
        order('Phone')
            .then(response => {
                console.log('Response Done');
                console.log(response)
                return processOrder(response);
            })
            .then(responseProcessed => {
                console.log(responseProcessed);
            })
            .catch(error => {
                console.log(error);
            });

    //Async Await
    const dataAA = require('./Tercera App/async-await');
        //Suplantamos el order por:
        async function Done(product) { //Ordenar Producto
            try {const response = await order(product);
             console.log('Response received');
             const responseProcessed = await processOrder(response);
             console.log(responseProcessed);
             } catch (error) {
                 console.log(error);
             }
        }
         
        Done('Phone');


//Modelo Cliente-Servidor
    //Solicitudes de transferencia de datos JSON mediante metodos a un servidor o cliente
    
    //Metodo HTTP //inidica intencio de la solicitud
        //GET //Obtiene recursos desde servidor
        //POST //Crea un recurso especifico
        //PUT //Modifica un recurso
        //DELETE //Elimina
    
    //Respuestas HTTP //
        //Headers //Informacion adicional
        //Body //Informacion que se debe enviar hacia el cliente

    //Codigos de Estado HTTP
        //Necesarios para que el cliente sepa que paso
        //Informativas (100-199)
        //Afirmativas (200-299) 200 OK-Respuesta exitosa
        //Redireccional (300-399)
        //Error cliente (400-499) 400 Bad Request-No puso interpretar solicitud // 404 Not Found - No encontro recurso
        //Error servidor (500-599) 500 Internal Server Error-Error sin poder manejar
    
//Primer servidor
    const ubicationInfo = require('./Y-Server/server-1');
    //Modulo http //transmite informacion
    const http = require ('http');

    const server = http.createServer ((request, response) => {
        //Aca va el proceso a determinar
        response.end('Hello');
    });

    //Puerto //Ubicacion virtual del sistema operativo
    
    server.listen(3000, () => {
        console.log('Listening')
    }); //De esta manera en localhost:3000 se va a estar ejecutando el server y vamos a ver el HELLO anterior

    //Request y Response
        response.end('Text'); //Se encarga siempre de terminar el proceso dentro de:
        const server1 = http.createServer ((request, response) => {
            //Aca va el proceso a determinar
            response.end('Hello');
        });
    
    //Estructura de URL
        
        //https //protocolo
        //www. //subdominio
        //localhost //dominio-referencia unica a un sitio web
        //.org //dominio de nivel superior
        //espanol //path-camino dentro del servidor
        // /usuarios/14 //parametro de ruta
        // search?1=ejemplo //parametro query-usados para obtener contenido dinamico
            //Para colocar varios parametros query debemos colocar & para separar hola+si&no+chau
    
    //Modulo URL
        const ubicationInfoURL = require('./Y-Server/url');
    
    //Routing
        //Maneja las solicitudes del cliente en base a criterios, metodo y camino
        const ubiRouting = require ('./Y-Server/routing/routing');
    
//NODEMON

    //Reinicia la aplicacion de NODE cuando detecta algun cambio en los archivos
    //Para instalar usamos
        //npm install -g nodemon
        //De esta manera estara en forma global y se podra ejecutar con:
            //nodemon <aplicacion>
        //DEBE EJECUTARSE EN COMAND PROMP
    
//Introduccion a Express
        //Framework de Node
            //Mas facil definir el Routing
            //Enfocado en el alto rendimiento
            //Nos permite desarrollas aplicaciones
        //Conceptos importantes
            //CreateReedUpdateDelete //Operaciones basicas con informacion almacenada
                // POST(Create) - GET(Reed) - PUT(Update) - DELETE
                //API //Tipo de interfaz de software que permite que dos o mas programas se comuniquen
                    //Nos permite que un software ofrezca un servicio a otro
                    //Son usados por el programador para implementar su programa
                //REST //Estilo de arquitectura de software
            //Proyecto en Express
            const ubicationExpress = require ('./Z-Express');