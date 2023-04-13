"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = require("./routes/products.routes");
const dotenv_1 = __importDefault(require("dotenv"));
const order_routes_1 = require("./routes/order.routes");
const user_routes_1 = require("./routes/user.routes");
dotenv_1.default.config();
// import * as winston from 'winston';
// import * as expressWinston from 'express-winston';
const app = express_1.default(); // Middleware Framework for RESTful web services
const server = http_1.createServer(app);
const routes = [];
// configure middleware
app.use(express_1.default.json());
app.use(cors_1.default());
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
app.get("/", (req, res) => {
    res.status(200).send(msg);
});
routes.push(new user_routes_1.UserRoutes(app));
// protected resources
// app.use(tokenGuard());
routes.push(new products_routes_1.ProductRoutes(app));
routes.push(new order_routes_1.OrderRoutes(app));
server.listen(process.env.PORT || 3000, () => console.log(msg));
exports.default = app;
//# sourceMappingURL=app.js.map