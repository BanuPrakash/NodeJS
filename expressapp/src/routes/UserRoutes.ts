import express from 'express';
import UserController from "../controller/UserController";


// delegate call to controller based on URL
export class UserRoutes {
    constructor(private app:express.Application) {}
    configureRoutes() : express.Application {
        // http:localhost:3000/register
        this.app.route("/register")
        .post(UserController.register);

        this.app.route("/login")
        .post(UserController.login);
        return this.app;
    }
}