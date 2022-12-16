import express from 'express';
import EmployeeController from "../controller/EmployeeController";


// delegate call to controller based on URL
export class EmployeeRoutes {
    constructor(private app:express.Application) {}
    configureRoutes() : express.Application {
        // http:localhost:3000/products
        this.app.route("/employees")
        .get(EmployeeController.listEmployees);
        return this.app;
    }
}