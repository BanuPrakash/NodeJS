import { NextFunction, Request, Response } from "express";

class ProductMiddleWare {
    async validateProduct(req:Request, res: Response, next:NextFunction) {
        if(req.body && req.body.name && req.body.price) {
            next();
        } else {
            res.status(400).send("Missing fields!!!");
        }
    }
}

export default new ProductMiddleWare();