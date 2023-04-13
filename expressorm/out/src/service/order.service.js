"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models"); // DB table
const connection_1 = require("../config/connection");
class OrderService {
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            // let orderModels:Order[] = await Order.findAll({include:[{model: Item, nested:true}]});
            let orderModels = yield models_1.Order.findAll({ include: { all: true, nested: true } });
            console.log(orderModels);
            return orderModels;
        });
    }
    placeOrder(orderDto) {
        return __awaiter(this, void 0, void 0, function* () {
            let tx = connection_1.connection.transaction();
            try {
                let placedOrder = yield models_1.Order.create({
                    "orderDate": new Date().toString(),
                    "customer_fk": orderDto.customer,
                    "total": orderDto.total
                });
                orderDto.Items.forEach((item) => __awaiter(this, void 0, void 0, function* () {
                    yield placedOrder.addItem(yield models_1.Item.create({
                        "amount": item.amount,
                        "qty": item.qty,
                        "product_fk": item.product
                    }));
                }));
                (yield tx).commit();
                return placedOrder;
            }
            catch (ex) {
                console.log(ex);
                (yield tx).rollback();
            }
        });
    }
}
exports.default = new OrderService(); // singleton
//# sourceMappingURL=order.service.js.map