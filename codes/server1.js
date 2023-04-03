const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    var content = fs.readFileSync(__filename); // blocking code
    response.end(content.toString());
});

// 1234 is ServerSocket
server.listen(1234, () => console.log("Server Started!!!"));

// http://localhost:1234/