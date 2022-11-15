"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eventRoutes_1 = __importDefault(require("./eventRoutes"));
var userRoutes_1 = __importDefault(require("./userRoutes"));
var routes = { userRouter: userRoutes_1.default, eventsRouter: eventRoutes_1.default };
exports.default = routes;
//# sourceMappingURL=index.js.map