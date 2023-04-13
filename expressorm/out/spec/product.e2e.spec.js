"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/api/app"));
const chai_1 = require("chai");
describe('GET /products endpoint', () => {
    it("Get product endpoint sucess return response", () => {
        return supertest_1.default(app_1.default)
            .get('/products')
            .then(response => {
            chai_1.expect(response.statusCode).to.equal(200);
            chai_1.expect(response.body)
                .to.be.an.instanceof(Array)
                .and.to.has.length.greaterThan(1);
            let products = response.body;
            chai_1.expect(products[0]).that.includes.all.keys(['id', 'name', 'price']);
        });
    });
    it("get /product/:id endpoint", () => {
        return supertest_1.default(app_1.default)
            .get('/products/1')
            .then(response => {
            chai_1.expect(response.statusCode).to.equal(200);
            chai_1.expect(response.body).that.includes.all.keys(['id', 'name', 'price']);
        });
    });
});
//# sourceMappingURL=product.e2e.spec.js.map