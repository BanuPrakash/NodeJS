import express, {Application, Request, Response} from 'express'; 

import {Server, createServer} from 'http';

import {ProductRoutes} from './routes/ProductRoutes';

const app:Application = express();

const server:Server = createServer(app);


// JSON.parse(string) and JSON.stringify(...);
app.use(express.json()); // built-in middleware

// GET http://localhost:3000/

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Server running on port 3000!!!!");
});

new ProductRoutes(app).configureRoutes();
 

server.listen(process.env.PORT || 3000 , () => console.log("server started!!!"));