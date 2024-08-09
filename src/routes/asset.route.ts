import { Router } from "express";
import {
  CREATE_ASSET,
  DELETE_ASSET,
  GET_ALL_ORDERS,
  GET_ASSETS,
  REQUEST_ASSET,
} from "../controllers/asset.controller";

const assetRouter = Router();

assetRouter.post("/create-asset", CREATE_ASSET);
assetRouter.post("/make-request", REQUEST_ASSET);
assetRouter.get("/get-assets", GET_ASSETS);
assetRouter.delete("/assets/:user_id", DELETE_ASSET);
assetRouter.get("/all-orders", GET_ALL_ORDERS);
export default assetRouter;
