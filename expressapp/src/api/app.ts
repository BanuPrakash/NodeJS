import express, {Application, Request, Response} from 'express'; // web framework
// import cors from 'cors';
import {Server,createServer} from 'http';

import ProductRoutes from '../routes/ProductRoute'; // class
import SalesRoute from '../routes/SalesRoute';
import mongoose from 'mongoose';

const app:Application = express();

// app.use(cors({
//     origin: "http://localhost:8080",
//     methods: "GET POST"
// }));

app.use(express.json()); // middleware --> payload to JSON

const server:Server = createServer(app); 

const msg = "Server running at http://localhost:3000";

app.get("/", (req:Request, res:Response) => {
    res.status(200).send(msg);
});

new ProductRoutes(app).configureRoutes();

new SalesRoute(app).configureRoutes();

mongoose.connect("mongodb://localhost:27017/node_express_db");

server.listen(process.env.PORT || 3000, () => console.log("Server started!!!"));


// var server = createServer((req, res) => {
//     let url = req.requestUrl;
//     if(url  === '/products' && req.method == 'GET') {

//     }
//     if(url  === '/products' && req.method == 'POST') {

//     }
//     if(url  === '/employees' && req.method == 'GET') {

//     }
// });

// server.listen(12334)