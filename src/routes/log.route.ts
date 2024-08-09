import { Router } from "express";
import { GET_LOGS } from "../controllers/log.controller";

const logRouter = Router();

logRouter.get("/get-logs", GET_LOGS);

export default logRouter;
