const http = require('http');
const fs = require('fs');

const handler = (req, res) => {
    //console.log(req.url, req.method, req.headers);
    //proccess.exit();
    
    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter msg</title></head><body><h1>Hello world!</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();    
    }

    if(url === '/message' && method === 'POST'){
        const body = [];

        const onDataHandler = (chunk) => body.push(chunk);
        req.on('data', onDataHandler);

        const onEndHandler = () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        }
        req.on('end', onEndHandler);
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>hi</title></head><body><h1>Hello world!</h1></body>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(handler);

server.listen(3000);