"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var userRouter = (0, express_1.Router)();
var userController = new userController_1.UserController();
// For TEST only ! In production, you should use an Identity Provider !!
userRouter.post("/registerEmployee", userController.registerEmployee);
userRouter.post("/registerNgo", userController.registerNgo);
userRouter.post("/registerEnterprise", userController.registerEnterprise);
userRouter.post("/login", userController.authenticateUser);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map