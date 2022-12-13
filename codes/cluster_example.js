const fs = require('fs');
const cluster = require('cluster');
const os = require('os');
const http = require('http');

const cpus = os.cpus().length;

if(cluster.isMaster) {
    for(let i = 0; i< cpus - 1; i++) {
        cluster.fork();
    }
    cluster.on("listening", (worker) => {
        console.log("Started Cluster child" , worker.process.pid);
    });
    cluster.on("exit", (worker) => {
        console.log("Worker killed", worker.process.pid);
        cluster.fork();
    })
} else {
    var server = http.createServer( (req, res) => {
        res.write(process.pid.toString());
        var stream = fs.createReadStream(__filename);
        stream.on("data", (chunk) => {
            res.write(chunk.toString());
        });
        stream.on("end", () => {
            res.end();
        })
    });
    server.listen(3000);
}

