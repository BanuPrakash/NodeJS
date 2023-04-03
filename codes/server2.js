const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    // Async operation
    fs.readFile(__filename, (err, data) => {
        if(!err) {
            response.end(data.toString());
        }
    }); 
   
    // response.write("Hello!!!"); // non blocking
});

// 1234 is ServerSocket
server.listen(1234, () => console.log("Server Started!!!"));

// http://localhost:1234/