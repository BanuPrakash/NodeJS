import express, {Application, Request, Response} from 'express'; // web framework
// import cors from 'cors';
import {Server,createServer} from 'http';

import ProductRoutes from '../routes/ProductRoute'; // class
import SalesRoute from '../routes/SalesRoute';
import mongoose from 'mongoose';
import ProductService from '../services/ProductService';
import path from 'path';
import UserRoute from '../routes/UserRoute';
import { tokenGuard } from '../services/TokenGuard';

const app:Application = express();

// view engine
app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, '../views'));

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


new UserRoute(app).configureRoutes();

app.use(tokenGuard); // middleware

new ProductRoutes(app).configureRoutes();

new SalesRoute(app).configureRoutes();


app.get('/productPage',   (req:Request, res:Response) => {
    res.render('productView',  {
         'title' : "Product View",
         'products': [
             { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
             { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
             { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
             { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
             { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
         ]
     });
});
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