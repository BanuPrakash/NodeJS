import express from 'express';
import {CommonRoutes} from './common.routes';
import orderController from '../controllers/order.controller';

export class OrderRoutes extends CommonRoutes {
     constructor(app:express.Application)  {
        super(app, "OrderRoutes");
    }
   
    configureRoutes(): express.Application {
        this.app.route("/orders")
            .get(orderController.getOrders)
            .post(orderController.placeOrder);

    return this.app;
    }
}
