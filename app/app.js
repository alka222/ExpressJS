// const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In the next middleware');
    res.send('<h1>Hello From Express JS!</h1>'); // text/html
    // res.send( { key1: 3 }) // application/json
})

app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);