const http = require('http');

const handler = (req, res) => {
    console.log(req);
}

const server = http.createServer(handler);

server.listen(3000);