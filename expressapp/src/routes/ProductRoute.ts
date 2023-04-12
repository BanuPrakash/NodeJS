import { Application, Request, Response } from "express";
import ProductController from "../controller/ProductController";// object

export default class ProductRoutes {
    constructor(private app:Application){}

    configureRoutes(): Application   {
        // http://localhost:3000/products
        this.app.route('/products')
        .get(ProductController.listProducts)
        .post(ProductController.createProduct);

         // http://localhost:3000/products/3
        this.app.route('/products/:id')
        .get(ProductController.getProductById)
        .delete( ( req:Request, res:Response) => {
            res.status(400).send("not implemented!!!")
        });

        return this.app;
    }
}