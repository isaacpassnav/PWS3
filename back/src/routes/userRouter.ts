import { Router } from "express";
import { getAllUsers, getUserById, postLoginUser, postRegisterUser } from "../controllers/userController";
const userRouter:Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", postRegisterUser);
userRouter.post("/login", postLoginUser);

export default userRouter;