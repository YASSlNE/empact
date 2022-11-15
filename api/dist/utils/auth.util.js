"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = exports.decodeToken = exports.createTokenFromUser = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var secrets_1 = require("./secrets");
var jwtDecode = __importStar(require("jwt-decode"));
function createTokenFromUser(user, role) {
    return jwt.sign({ id: user.id, role: role }, String(secrets_1.JWT_SECRET));
}
exports.createTokenFromUser = createTokenFromUser;
function decodeToken(token) {
    return jwtDecode.default(token);
}
exports.decodeToken = decodeToken;
function getToken(req) {
    return req.headers.authorization.replace("Bearer ", "");
}
exports.getToken = getToken;
//# sourceMappingURL=auth.util.js.map