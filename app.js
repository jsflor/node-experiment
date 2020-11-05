const http = require('http');

const handler = (req, res) => {
    console.log(req.url, req.method, req.headers);
    //proccess.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>hi</title></head><body><h1>Hello world!</h1></body>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(handler);

server.listen(3000);