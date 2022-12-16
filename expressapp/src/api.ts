import express, {Application, Request, Response} from 'express'; 

import {Server, createServer} from 'http';
import mongoose from 'mongoose';
import { EmployeeRoutes } from './routes/EmployeeRoutes';

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
new EmployeeRoutes(app).configureRoutes();

mongoose.connect("mongodb://localhost:27017/adobe_express", () => {
    console.log("mongodb connected!!!");
});

// global error handling
app.use((err: Error,req:express.Request, res:express.Response, next:express.NextFunction) => {
    console.log(err.stack);
    res.status(500).send("Boom :-(");
    next();
});



server.listen(process.env.PORT || 3000 , () => console.log("server started!!!"));