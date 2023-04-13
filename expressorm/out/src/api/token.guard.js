"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGuard = void 0;
const user_service_1 = __importDefault(require("../service/user.service"));
function getTokenFromHeaders(headers) {
    const header = headers.authorization;
    if (!header)
        return header;
    return header.split(' ')[1];
}
exports.tokenGuard = (() => (req, res, next) => {
    const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || '';
    const hasAccess = user_service_1.default.verifyToken(token);
    hasAccess.then(a => {
        if (!a)
            return res.status(403).send({ message: 'No access' });
        next();
    });
});
//# sourceMappingURL=token.guard.js.map