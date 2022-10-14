const express = require ('express');
const app = express ();

const {infoCourses} = require('./courses.js');
const routerProgramation = require('./routers/programation.js');

//Routing
app.get('/', (req, res) => { //Escribir siempre REQ y RES para evitar errores de generacion de codigo
    res.send('My first server');
});

app.get('/courses', (req, res) => {
    res.send(JSON.stringify(infoCourses)); //Cuando recibamos la info desde el server sera en string por lo tanto aca simulamos tener que pasarlo a JSON
});

app.get('/courses/programation', (req, res) => {
    res.send(JSON.stringify(infoCourses.programation));
});

app.get('/courses/mathematics', (req, res) => {
    res.send(JSON.stringify(infoCourses.mathematics));
});

//Parametros de Ruta //Params Routing
        //Colocamos :lenguage siendo un parametro URL
        //Todos los lenguajes tienen un id o lenguage especificado, pues accedemos desde ahi a cada uno en lugar de colocar cada ruta
app.get('/courses/programation/:lenguage', (req, res) => {
    const lenguage = req.params.lenguage; //Determinamos que el lenguage es igual al parametro que pasamos en la URL
    const result = infoCourses.programation.filter(course => course.lenguage === lenguage); //Filtramos y equiparamos 
    if (result.length === 0) {
        return res.status(404).send(`${lenguage} not found`); //Se enviara esto en casa de no encontrar el curso solicitado
    }
                    //Para aplicar parametros Query // Es decir los ?parametro=valor al final
    if (req.query.order === 'views') {
        return res.send(JSON.stringify(result.sort((a, b) => b.views - a.views)));
    }

    res.send(JSON.stringify(result));
})
        //Se puede adaptar a cualquier caracteristica
app.get('/courses/mathematics/:theme', (req, res) => {
    const theme = req.params.theme;
    const result = infoCourses.mathematics.filter(courses => courses.theme === theme);
    if (result.length === 0) {
        return res.status(404).send(`${theme} not found`);
    }

    res.send(JSON.stringify(result));
})
        //Aca con dos parametros
app.get('/courses/programation/:lenguage/:level', (req, res) => {
    const lenguage = req.params.lenguage;
    const level = req.params.level;

    const result = infoCourses.programation.filter(course => course.lenguage === lenguage && course.level === level);
    if (result.length === 0) {
        return res.status(404).send(`${lenguage} ${level} not found`);
    }

    res.send(JSON.stringify(result));
})

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

//En un servicio externo el puerto sera asignado de forma dinamica
const ONPORT = process.env.PORT || 3000; //Utiliza esto para tomar dicho puerto si no esta definido

app.listen(ONPORT, () => {
    console.log(`Server listening on port: ${ONPORT}...`)
});