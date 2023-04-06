"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var http_1 = require("http");
var server = (0, http_1.createServer)(function (request, response) {
    var stream = fs_1.default.createReadStream(__filename);
    stream.on("data", function (chunk) {
        response.write(chunk);
    });
    stream.on("end", function () {
        response.end();
    });
});
server.listen(1234, function () { return console.log("Server Started!!!"); });
