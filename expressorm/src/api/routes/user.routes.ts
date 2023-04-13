import express from 'express';
import {CommonRoutes} from './common.routes';
import userController from '../controllers/user.controller';

export class UserRoutes extends CommonRoutes {
     constructor(app:express.Application)  {
        super(app, "UserRoutes");
    }
   
    configureRoutes(): express.Application {
        this.app.route("/register")
             .post(userController.register);
        this.app.route("/login")
             .post(userController.login);

    return this.app;
    }
}
