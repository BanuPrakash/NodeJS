import { NextFunction, Request, Response } from "express";
import UserService from "./UserService";


export function tokenGuard(req:Request, res:Response, next: NextFunction) {
    const headers = req.headers;
    const header = headers.authorization;
    const token = header?.split(' ')[1];
    const hasAccessPromise = UserService.verifyToken(token!);
    hasAccessPromise.then(result => {
        if(result) {
            next();
        } else {
            return res.status(403).send({message:"No access, Forbidden!!!"});
        }
    })

}