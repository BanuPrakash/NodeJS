import {Request, Response} from 'express'
import ProductService  from "../service/ProductService"; // object imported

export class ProductController {
    async listProducts(req:Request, res: Response) {
        const products = await ProductService.getProducts();
        res.status(200).send(products);
    }

    // http://localhost:3000/products/3
    async getProductById(req:Request, res: Response) {
        const product = await ProductService.getProduct(+req.params.id); // + converts string to number
        res.status(200).send(product);
    }

    async createProduct(req:Request, res: Response) {
        const msg = await ProductService.addProduct(req.body); // payload will contain new product 
        res.status(200).send(msg);
    }
}

export default new ProductController(); 