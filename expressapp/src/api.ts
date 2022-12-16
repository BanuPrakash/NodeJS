import express, {Application, Request, Response} from 'express'; 

import {Server, createServer} from 'http';


const app:Application = express();

const server:Server = createServer(app);

// GET http://localhost:3000/

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Server running on port 3000!!!!");
});

server.listen(process.env.PORT || 3000 , () => console.log("server started!!!"));