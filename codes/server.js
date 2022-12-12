const fs = require('fs'); // built-in module
var http = require('http'); // built-in module


var server = http.createServer( (request, response) => {
    // read client info from "request"
    var stream = fs.createReadStream(__filename);
    stream.on('data', chunk => {
        response.write(chunk.toString()); // can execute multiple times based on file size
    });
    stream.on('end', () => {
        response.end();
    })
});

server.listen(3000, () => console.log("server started!!! [ http://localhost:3000/] "));
