import { Application } from "express";
import UserController from "../controller/UserController";

export default class UserRoute {
    constructor(private app:Application){}

    configureRoutes(): Application   {
        this.app.route("/register")
        .post(UserController.register);
        this.app.route("/login")
        .post(UserController.login);

        return this.app;
    }
}