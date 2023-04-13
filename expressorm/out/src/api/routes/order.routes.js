"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const common_routes_1 = require("./common.routes");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
class OrderRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, "OrderRoutes");
    }
    configureRoutes() {
        this.app.route("/orders")
            .get(order_controller_1.default.getOrders)
            .post(order_controller_1.default.placeOrder);
        return this.app;
    }
}
exports.OrderRoutes = OrderRoutes;
//# sourceMappingURL=order.routes.js.map