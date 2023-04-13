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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = __importDefault(require("sinon"));
const product_service_1 = __importDefault(require("../src/service/product.service"));
const product_controller_1 = __importDefault(require("../src/api/controllers/product.controller"));
const chai_1 = require("chai");
const sinon_express_mock_1 = require("sinon-express-mock");
describe('Products controller', () => {
    let products = [{ "id": 1, "name": "B", "price": 100, "category": "C1" },
        { "id": 2, "name": "C", "price": 500, "category": "C1" }];
    it("get products ", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const getProducts = sinon_1.default.stub(product_service_1.default, 'getProducts').usingPromise(Promise);
        getProducts.resolves();
        // let resSpy = sinon.spy()
        const req = sinon_express_mock_1.mockReq();
        const res = sinon_express_mock_1.mockRes();
        yield product_controller_1.default.listProducts(req, res);
        chai_1.expect(getProducts.calledOnce).to.equal(true);
        getProducts.restore();
        done();
    }));
});
//# sourceMappingURL=productcontroller.spec.js.map