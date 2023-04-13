const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
   let url = request.url;
   if(url === '/file') {
   const stream = fs.createReadStream(__filename); // should read form request
   stream.on("data", (chunk) => {
    response.write(chunk.toString());
   });

   stream.on("end", () => {
    response.end();
   });
} else if (url == '/product') {
   if(request.method === 'GET') {
      
   }
}
});

// 1234 is ServerSocket
server.listen(1234, () => console.log("Server Started!!!"));

// http://localhost:1234/