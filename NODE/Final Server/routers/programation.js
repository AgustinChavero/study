//Mathematics se aplicara de la misma forma
const express = require ('express');

const {programation} = require('../info/courses.js').infoCourses; //Con esto omitimos el infoCourses.programation y pasamos directamente a programation

const routerProgramation = express.Router();
//Middleware //Ejecutandose despues de recibir una solicitud y antes de enviar la respuestas
routerProgramation.use(express.json()); //Nos permite procesar el cuerpo en formato JSON

routerProgramation.get('/', (req, res) => {
    res.send(JSON.stringify(programation));
});

routerProgramation.get('/:lenguage', (req, res) => {
    const lenguage = req.params.lenguage; 
    const result = programation.filter(course => course.lenguage === lenguage); 
    if (result.length === 0) {
        return res.status(404).send(`${lenguage} not found`); 
    }

    if (req.query.order === 'views') {
        return res.send(JSON.stringify(result.sort((a, b) => b.views - a.views)));
    }

    res.send(JSON.stringify(result));
})

routerProgramation.get('/:lenguage/:level', (req, res) => {
    const lenguage = req.params.lenguage;
    const level = req.params.level;

    const result = programation.filter(course => course.lenguage === lenguage && course.level === level);
    if (result.length === 0) {
        return res.status(404).send(`${lenguage} ${level} not found`);
    }

    res.send(JSON.stringify(result));
})

//POST, PUT, PATCH Y DELETE
    //POST //const ubication = require ('../index.http');
                
            //direccion HTTP donde queremos realizar la solicitud      //version de HTTP
    /*  POST http://localhost:3000/courses/programation/ HTTP/1.1
        Content-Type: application/json //Tipo de contenido
            //Contenido
          { "id": 4,    //Informacion que queremos pasar como cuerpo de solicitud
            "tittle": "Learn HTML",
            "lenguage": "HTML",
            "views": 4000,
            "level": "basic" } */

routerProgramation.post('/', (req, res) => {
    let newCourse = req.body; //Aqui la extraemos con la propiedad Body
    programation.push(newCourse);
    res.send(JSON.stringify(programation));
}); //Para realizar todo esto con React utilizariamos una funcion FETCH desde el cliente

    //PUT //Te permite actualizar una entidad (conjunto de propiedades, cliente, objeto, producto, algo a almacenar) en la base de datos
            //Se debe enviar todo el contenido y solo las actualizadas se modificaran

    routerProgramation.put('/:id', (req, res) => {
        const courseUpdate = req.body; //Sucede lo mismo que en POST con el Body
        const id = req.params.id; //Obtenemos el ID del curso que estamos reemplazando
        //Con Index tratamos de encontrar el indice que corresponde
        const index = programation.findIndex(course => course.id == id); //Se recibe el numero como un string y no como numero como tal
        
        if(index >= 0) { //Si es valido, porque arrancan desde 1, reemplazamos el objeto
            programation[index] = courseUpdate;
        }
        res.send(JSON.stringify(programation));
    });


    //PATCH //Este nos permite pasar pares clave=valor que queremos actualizar
                //Sin tener que pasar todo el curso, solo lo que queremos cambiar

    routerProgramation.patch('/:id', (req, res) => {
        const courseUpdate = req.body;
        const id = req.params.id;
        const index = programation.findIndex(course => course.id == id);

        if(index >= 0) {//La unica diferencia se encuentra aca
            const courseToModify = programation[index];
            Object.assign(courseToModify, courseUpdate); //Solo actualizamos el valor y propiedades a partir de lo que se indico en el body, asignando la info actualizada al curso
        }
        res.send(JSON.stringify(programation));
    });

    //DELETE

    routerProgramation.delete('/:id', (req, res) => {
        const id = req.params.id;
        const index = programation.findIndex(course => course.id == id);
        if (index >= 0) {
            programation.splice(index, 1); //Marcamos donde cortar y la cantidad a eliminar
        }
        res.send(JSON.stringify(programation));
    });
module.exports = routerProgramation;