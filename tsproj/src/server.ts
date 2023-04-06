import fs , {ReadStream} from 'fs';
import {createServer ,Server, IncomingMessage, ServerResponse} from 'http';

const server:Server = createServer( (request:IncomingMessage, response:ServerResponse) => {
    const stream:ReadStream = fs.createReadStream(__filename);
    stream.on("data", (chunk:string) => {
        response.write(chunk);
    })
    stream.on("end", () => {
        response.end();
    })
});

server.listen(1234, () => console.log("Server Started!!!"));