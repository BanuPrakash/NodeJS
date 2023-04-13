import { Application } from "express";
import SalesController from "../controller/SalesController";

export default class SalesRoute {
    constructor(private app:Application){}

    configureRoutes(): Application   {
        this.app.route("/sales")
        .get(SalesController.getSales);

        return this.app;
    }
}