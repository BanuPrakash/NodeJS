import { Request, Response } from "express";
import SalesService from "../services/SalesService";

export class SalesController {
   async getSales(req:Request, res:Response) {
      const sales = await SalesService.getSales();
      res.status(200).send(sales); 
   }
}

export default new SalesController();