import { Router } from "express";
import { UserController } from "../controllers/userController";

const userRouter: Router = Router();
const userController: UserController = new UserController();

// For TEST only ! In production, you should use an Identity Provider !!
userRouter.post("/registerEmployee", userController.registerEmployee);
userRouter.post("/registerNgo", userController.registerNgo);
userRouter.post("/registerEnterprise", userController.registerEnterprise);
userRouter.post("/login", userController.authenticateUser);

export default userRouter;