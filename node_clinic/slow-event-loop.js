const http = require('http');

const server = http.createServer((req,res) => {
 sleep(30);
 res.end("Hello!!!");
});

function sleep(ms) {
 const future = Date.now() + ms;
 while(Date.now() < future); 
}

server.listen(3000);

process.on('SIGINT', () => {
 server.close();
});
