"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor() {
        this.id = 0;
        this.email = "";
        this.password = "";
    }
    static findById(id) {
        return this.users.filter(user => user.id == id)[0];
    }
    static findByEmail(email) {
        return this.users.filter(user => user.email === email)[0];
    }
    static create(user) {
        UserModel.users.push(user);
        return new Promise((resolve, reject) => resolve(user));
    }
}
exports.UserModel = UserModel;
UserModel.users = [];
//# sourceMappingURL=UserModel.js.map