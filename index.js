const http = require('http');
const colors = require('colors');

//Server function
const handleServer = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>You you...</h1>');
    res.end();
};

//Creating server
const server = http.createServer(handleServer);

//lifting server in port 3030
server.listen(3030, () => {
    console.log('Working and running on 3030!'.green);
});
