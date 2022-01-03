import express from 'express';
import colors from 'colors';

// Creating server
const server = express();

// Home Endpoint
server.get('/', (req, res) => {
    res.send('<h1>Hola Express!</h1>');
    res.end;
})

// Listening server in port 3000
server.listen(3000, () => {
    console.log("Running and working in 3030".blue);
})