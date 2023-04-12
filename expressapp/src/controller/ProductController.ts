import { Request, Response } from "express";
import ProductService from "../services/ProductService"; // object

export class ProductController {
    async listProducts(req:Request, res: Response) {
        const products = await ProductService.getProducts();
        res.status(200).send(products); 
    }

    // http://localhost:3000/products/3 --> Path Parameter
    async getProductById(req:Request, res: Response) {
        const product = await ProductService.getProductById(+req.params.id)
        res.status(200).send(product); 
    }

    // POST http://localhost:3000/products/
    // body contains new product {...}
    async createProduct(req:Request, res: Response) {
        const msg = await ProductService.addProduct(req.body);
        res.status(201).send(msg);
    }
}

export default new ProductController(); 