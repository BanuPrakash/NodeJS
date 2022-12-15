"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = require("http");
const server = http_1.createServer((request, response) => {
    console.log(request.url);
    switch (request.url) {
        case "/file":
            const stream = fs_1.default.createReadStream(__filename);
            stream.on("data", (chunk) => {
                response.write(chunk);
            });
            stream.on("end", () => {
                response.end();
            });
        case "/":
            response.end("Hello World!!!");
    }
});
server.listen(3000, () => console.log("server started!!!"));
