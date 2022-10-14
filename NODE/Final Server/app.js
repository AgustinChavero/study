const express = require ('express');
const app = express ();

const {infoCourses} = require('./info/courses.js');

const routerProgramation = require('./routers/programation.js');
app.use('/courses/programation', routerProgramation);

const routerMathematics = require('./routers/mathematics.js');
app.use('/courses/mathematics', routerMathematics);

//Routers en Express    //Nos permites rehusar la primer parte de una URL
    //('/courses/programation')
                    //Cada cual debe tener un nombre especifico
        //    const routerProgramation = express.Router();
        //    app.use('/courses/programation', routerProgramation); //De esta manera asociamos el camino inicial al router, para luego ir agregando lo que sigue
        //    routerProgramation.get('/', (req, res) => { //En lugar de app colocamos desde donde inica el URL
        //        res.send(JSON.stringify(infoCourses.programation));
        //    }); //Asi podemos suplantar absolutamente todos las 'app.get'

//Para manejarlo de forma masiva manejaremos Routers en dinstintos archivos
            //Crearemos un nueva carpeta ubicada aca:
            //const routersProgramation = require ('./routers/programation.js');
    //Para traer el router:
        // const routerProgramation = require('./routers/programation.js'); 
        // routerProgramation.use('/courses/programation', routerProgramation)

//Routing
app.get('/', (req, res) => { //Escribir siempre REQ y RES para evitar errores de generacion de codigo
    res.send('My first server');
});

app.get('/courses', (req, res) => {
    res.send(JSON.stringify(infoCourses)); //Cuando recibamos la info desde el server sera en string por lo tanto aca simulamos tener que pasarlo a JSON
});
//En un servicio externo el puerto sera asignado de forma dinamica
const ONPORT = process.env.PORT || 3000; //Utiliza esto para tomar dicho puerto si no esta definido

app.listen(ONPORT, () => {
    console.log(`Server listening on port: ${ONPORT}...`)
});