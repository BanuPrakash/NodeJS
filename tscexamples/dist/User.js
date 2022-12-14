"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Min_1 = __importDefault(require("./Min"));
const Upper_1 = __importDefault(require("./Upper"));
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
__decorate([
    Upper_1.default()
], User.prototype, "name", void 0);
__decorate([
    Min_1.default(5)
], User.prototype, "email", void 0);
exports.default = User;
