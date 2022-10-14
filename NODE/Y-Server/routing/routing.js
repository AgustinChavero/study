const http = require('http');
const courses = require('./courses');

const server = http.createServer((request, response) => {
    const {method} = request;

    switch(method) {
        case 'GET' :
            return handleRequestGet(request, response)
        case 'POST':
            return handleRequestPost(request, response);
        default:
            response.statusCode = 501;
            response.end(`Method dont found: ${method}`)
    }
});

function handleRequestGet(request,response) {
    const path = request.url;

    if (path === '/') {
        response.statusCode = 200; //Es el codigo por defecto no hace falta colocarlo es solo ejemplificador
        response.end('Welcome...')
    } else if (path === '/courses'){
        response.statusCode = 200;
        response.end(JSON.stringify(courses.infoCourses))
    } else if (path === '/courses/programation'){
        response.statusCode = 200;
        response.end(JSON.stringify(courses.infoCourses.programation))
    }
    
    response.statusCode = 404;
    response.end('Dont Found')
}

function handleRequestPost(request, response) {
    const path = request.url;
    //tomamos el post
    if (path === '/courses/programation') {
    /*  
        //de la ubicacion programation //De esta manera procesamos la solicitud sin Express
        let body = '';
        request.on('data', content => { //tomamos su contenido
            body += content.toString(); //lo pasamos a un string y lo enviamos al body
        }); //Lo que hacemos aca es recibir los datos y pasarlos a string para luego convertirla

        request.on('end', () => {
            console.log(body)
            console.log(typeof body); //Mostramos el tipo de dato, se vera una string

            body = JSON.parse(body); //lo pasamos a objeto
            
            console.log(typeof body); //Vemos si el cambio se efectuo
            console.log(body.tittle); //Mostramos su contenido
            response.end('Solicitud POST recibida para programation')
        });
    */
        response.end('Server with post request...')
    }
    response.statusCode = 404;
    response.end('Dont Found')
}


const port = 3000;

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});