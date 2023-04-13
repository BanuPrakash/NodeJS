"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_1 = require("./common.routes");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, "UserRoutes");
    }
    configureRoutes() {
        this.app.route("/register")
            .post(user_controller_1.default.register);
        this.app.route("/login")
            .post(user_controller_1.default.login);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user.routes.js.map