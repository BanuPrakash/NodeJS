import express, {Application, Request, Response} from 'express'; 
import path from 'path';
import {Server, createServer} from 'http';
import mongoose from 'mongoose';
import { EmployeeRoutes } from './routes/EmployeeRoutes';

import {ProductRoutes} from './routes/ProductRoutes';
import { UserRoutes } from './routes/UserRoutes';
import { tokenGuard } from './token.guard';

const app:Application = express();

const server:Server = createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// JSON.parse(string) and JSON.stringify(...);
app.use(express.json()); // built-in middleware

// GET http://localhost:3000/

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Server running on port 3000!!!!");
});



new UserRoutes(app).configureRoutes();

app.use(tokenGuard);
// protected resouces
new ProductRoutes(app).configureRoutes();
new EmployeeRoutes(app).configureRoutes();

app.get('/productView', (req, res) => {
    // productPage.ejs ==> generates dynamic HTML content
    res.render('productPage', { title: 'Products List', products:  [
        {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
        {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
        {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
        {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
        {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}]})
})


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