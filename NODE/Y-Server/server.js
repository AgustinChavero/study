const http = require ('http');

const server = http.createServer ((request, response) => {
    response.end('Hello');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Listening in port ${port}...`);
});