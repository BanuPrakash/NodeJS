import express from 'express';
import ProductController from "../controller/ProductController";

// delegate call to controller based on URL
export class ProductRoutes {
    constructor(private app:express.Application) {}

    configureRoutes() : express.Application {
        // http:localhost:3000/products
        this.app.route("/products")
        .get(ProductController.listProducts)
        .post(ProductController.createProduct);

        // http:localhost:3000/products/4
        this.app.route("/products/:id")
        .all((req:express.Request, res:express.Response, next:express.NextFunction) => {
            // logic for middleware
            console.log("Called ", req.url);
            next();
        })
        .get(ProductController.getProductById)
        .delete((req:express.Request, res:express.Response) => {
            res.status(200).send("deleted product with id " + req.params.id);
        })

        return this.app;
    }
}