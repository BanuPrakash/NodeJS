const cluster = require('cluster');
const fs = require('fs');
const http = require('http');

if (cluster.isMaster) {
    for (let i = 0; i < 4; i++) {
        cluster.fork(); // this file is loaded with isMaster = false
    }
    cluster.on("listening", (child) => {
        console.log("started child " + child.process.pid );
    });

    cluster.on("exit", child => {
        cluster.fork();
    });
} else {
    const server = http.createServer((request, response) => {
        const stream = fs.createReadStream(__filename); // should read form request
        stream.on("data", (chunk) => {
            response.write(chunk.toString());
        });

        stream.on("end", () => {
            response.end();
        });
    });
    // 1234 is ServerSocket
    server.listen(1234, () => console.log("Server Started!!!"));
}
// http://localhost:1234/