import {Request, Response, NextFunction} from 'express';

class ProductMiddleWare {
    async validateProductBodyField(req:Request, res:Response, next:NextFunction){
        if(req.body && req.body.name && req.body.price) {
            next();
        } else {
            res.status(400).send("Missing fields!!!");
        }
    }
}

export default new ProductMiddleWare();