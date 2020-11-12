const http = require('http');

const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("First middleware");
    next();
});

app.use((req, res, next) => {
    console.log("final middleware");
    res.send("<html><body><h1>Hello from express!</h1></body></html>");
});

const server = http.createServer(app);
server.listen(3000);