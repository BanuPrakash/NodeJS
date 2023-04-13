import express from 'express';
import {Server, createServer} from 'http';
import cors from 'cors';
import { CommonRoutes } from './routes/common.routes';
import { ProductRoutes } from './routes/products.routes';

import dotenv from 'dotenv';
import { OrderRoutes } from './routes/order.routes';
import { tokenGuard } from './token.guard';
import { UserRoutes } from './routes/user.routes';

dotenv.config();

// import * as winston from 'winston';
// import * as expressWinston from 'express-winston';

 

const app: express.Application = express(); // Middleware Framework for RESTful web services

const server:Server = createServer(app);

 

const routes:Array<CommonRoutes> = [];

// configure middleware
 
app.use(express.json());
app.use(cors());

// Logger configuration
// const loggerOptions: expressWinston.LoggerOptions = {
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//         winston.format.json(),
//         winston.format.prettyPrint(),
//         winston.format.colorize({all:true})
//     )
// };
// app.use(expressWinston.logger(loggerOptions));

// end logger configuration
 
const msg = `Server running at http://localhost:${process.env.PORT}`; 
app.get("/", (req:express.Request, res: express.Response) => {
    res.status(200).send(msg);
});
 

routes.push(new UserRoutes(app));

// protected resources
// app.use(tokenGuard());
routes.push(new ProductRoutes(app));
routes.push(new OrderRoutes(app));

server.listen(process.env.PORT || 3000, () => console.log(msg));

export default app;







