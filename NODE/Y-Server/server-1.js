const http = require('http');

const server = http.createServer((request, response) => {
    console.log('req (solid)');

    //console.log(request.url);
    //console.log(request.method); //GET-POST-PUT-DELETE
    
    console.log(response.statusCode); //200 OK
    response.statusCode = 404; //De esta forma lo cambiamos

    response.setHeader('content-type', 'application/json'); //Determinamos que tipo de dato enviamos
    console.log(response.getHeaders()); //Nos permite obtenerlos

    response.end('Hello again');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Listening in port ${port}...`)
});

