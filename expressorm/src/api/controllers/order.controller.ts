import { Request, Response } from 'express';
import OrderService from '../../service/order.service';

export class OrderController {
    async getOrders(req:Request, res:Response) {
        const orders = await OrderService.getOrders();
        res.status(200).send(orders);
    }

    async placeOrder(req:Request, res:Response) {
        const order = await OrderService.placeOrder(req.body);
        res.status(201).send(order);
    }
}

export default new OrderController();