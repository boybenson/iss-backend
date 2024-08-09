import { Router } from "express";
import {
  ADD_USER,
  GET_USERS,
  REMOVE_USER,
  SIGN_IN,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/auth/signin", SIGN_IN);
userRouter.post("/create-user", ADD_USER);
userRouter.get("/get-users", GET_USERS);
userRouter.delete("/delete/:user_id", REMOVE_USER);

export default userRouter;
